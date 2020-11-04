-- Run data/e-commerce.sql first to seed the DB with data

-- query: find the products that cost more than the most expensive product in the Toys department

-- We can sovle this with 2 separate queries
-- query: find the price of the most expensive product in the Toys dept.
SELECT MAX(p.price)
FROM products AS p
WHERE p.department = 'Toys';

-- query: find the producs that cost more than 947
SELECT p."name", p.price
FROM products AS p
WHERE p.price > 947;

-- But we can solve this with 1 query by using sub-queries
SELECT p."name", p.price
FROM products AS p
WHERE p.price > (
	SELECT MAX(p.price)
	FROM products AS p
	WHERE p.department = 'Toys'
);

-- Sub-queries can be placed in different places inside a parent query:
--  - in SELECT
--  - in FROM
--  - in JOIN
--  - in WHERE

-- The key is to understand the "shape" of the data returned by the sub-query



-- +------------------ [ Sub-query inside a SELECT ]-----------------+
-- |                   Sub-query shape: single value                 |
-- +-----------------------------------------------------------------+

-- query: show all product names with prices greater than 500 
-- with additional info about the price of the product relative to the most costly product
-- NOTES: 
--   - the sub-query value is part of a more complex formula
--   - the 1.0 multiplication the avoids integer division problem
SELECT 
	p."name", 
	p.price,
	p.price * 1.0 / (SELECT MAX(p.price) FROM products AS p)
		AS price_ratio
FROM products AS p
WHERE p.price > 500;



-- +------------------ [ Sub-query inside a FROM ]-------------------+
-- |               Sub-query shape: multiple rows/cols               |
-- +-----------------------------------------------------------------+

-- query: show product names and price/weight ration where p-w ration is grater than 10
-- NOTES:
--   - the sub-query in FROM must be aliased
--   - the outer SELECT/WHERE must match the cols produced by the sub-query

SELECT p."name", p.pw_ratio
FROM (
	SELECT 
		p."name", 
		p.price * 1.0 / p.weight AS pw_ratio 
		FROM products AS p
) AS p
WHERE p.pw_ratio > 10;


-- +------------------ [ Sub-query inside a FROM ]-------------------+
-- |                 Sub-query shape: single value                   |
-- +-----------------------------------------------------------------+

-- query: get the max-price value
-- NOTE: this is quite useless, but it illustrates that the sub-query in a FROM
--       is quite flexible as long as the parent SELECT/WHERE statemens are
--       compatile with the shape of the data produced by the sub-query

SELECT * 
FROM (SELECT MAX(p.price) FROM products AS p) 
	AS p;
	
-- query: get the total user count, total order count and the avg number of orders per user
SELECT 
	r.user_count, 
	r.order_count, 
	r.order_count * 1.0 / r.user_count AS avg_order_per_user
FROM (
	SELECT 
		COUNT(DISTINCT o.user_id) AS user_count,
		COUNT(*) AS order_count
	FROM orders AS o
) AS r

-- equivalent to the above
SELECT AVG(r.order_count) as avg_order_per_user
FROM (
	SELECT o.user_id, COUNT(*) as order_count
	FROM orders AS o
	GROUP BY o.user_id
) AS r;

-- if we are interested only in the avg orders per user value,
-- we can get it with 2 sub-queries inside SELECT.
-- NOTE: in this case no FROM is needed for the parent SELECT statement
--       (a.k.a. FROM-less SELECT)
SELECT
	(SELECT COUNT(*) FROM orders) * 1.0 / (SELECT COUNT(*) FROM users) 
AS avg_order_per_user;


SELECT MAX(r.avg_price) AS max_average_price
FROM (
	SELECT p.department, AVG(p.price) AS avg_price
	FROM products AS p
	GROUP BY p.department
) AS r;



-- +------------------ [ Sub-query inside a JOIN ]-------------------+
-- |               Sub-query shape: multiple rows/cols               |
-- +-----------------------------------------------------------------+

-- NOTES: 
--   - the sub-query in a JOIN must be aliased
--   - the sub-query from JOIN must return a result with cols compatible with
--     the ON clause in the parent query.


-- query: get the first name of users who ordered product with id 3 (this can be solved w/o a sub-query)
SELECT u.first_name
FROM users AS u
JOIN (
	SELECT user_id FROM orders AS o WHERE o.product_id = 3
) AS r
ON u.id = r.user_id;

-- the same as above w/o sub-query
SELECT u.first_name 
FROM users AS u
JOIN orders AS o
	ON u.id = o.user_id
WHERE o.product_id = 3
ORDER BY u.first_name;

-- +------------------ [ Sub-query inside a WHERE ]------------------+
-- |        Sub-query shape: multiple single value or a single col   |
-- +-----------------------------------------------------------------+

-- NOTES:
--   - the required shape of the result from the sub-query depends on the operator used inside the WHERE clause
--   - many of the use-cases for WHERE sub-queries can be addressed by the JOIN statement. Performance is usually similar.

-- query: get the orders related to a product with a price-to-weight ratio grater than 50
-- NOTES:
--   - query can be solved with a JOIN statement
--   - the WHERE/IN combo requires a sub-query with a result having a one-column shape (i.e. list of values)
SELECT o.id AS order_id
FROM orders AS o
WHERE o.product_id IN (
	SELECT p.id 
	FROM products AS p
	WHERE p.price / p.weight > 50
);

-- query: get the products with a price grater than the average price 
-- NOTES:
--   - query can be solved with a JOIN statement
--   - the WHERE/relational op combo requires a sub-query with a result having a single-value shape
SELECT p."name", p.price 
FROM products AS p
WHERE p.price > (
	SELECT AVG(p.price) FROM products as p
);


-- query: show name, dept and price of all the products that are more expensive than all the products in the 
--		  Industrial dept.
SELECT  p."name", p.department, p.price
FROM products AS p
WHERE p.department <> 'Industrial' AND p.price > (
	SELECT MAX(p.price) 
	FROM products AS p 
	WHERE p.department = 'Industrial'
);

-- same can be solved using the ALL clause
-- NOTE: the shape of the sub-query in this case is a column of values (i.e. list of values)
SELECT  p."name", p.department, p.price
FROM products AS p
WHERE p.department <> 'Industrial' AND p.price > ALL (
	SELECT p.price 
	FROM products AS p 
	WHERE p.department = 'Industrial'
);

-- query: show name, dept and price of all the products that are more expensive than at least one 
--        product in the Industrial dept
-- NOTES:
--   -  same query can be resolved using MIN
--   -  ANY has an alias of SOME (these do exactly the same thing)
SELECT p."name", p.department, p.price 
FROM products AS p
WHERE p.department <> 'Industrial' AND p.price > ANY (
	SELECT p.price 
	FROM products as p
	WHERE p.department = 'Industrial'
);


-- -------------------------[ CORRELATED SUB-QUERIES ]-----------------------------

-- query: show name, dept and price for the most expensive product in each dept
-- NOTES: 
--   - the key here is the ability to reference values in the parent query in the sub-query
--   - it is important to alias the FROM clauses to achieve this
SELECT p1."name", p1.department, p1.price 
FROM products AS p1 
WHERE p1.price = (
	SELECT MAX(p2.price)
	FROM products AS p2
	WHERE p2.department = p1.department
)
ORDER BY p1.department;

-- query: print the number of orders for each product (w/o using JOIN or GROUP BY)
SELECT 
	p."name",
	(
		SELECT COUNT(*) 
		FROM orders AS o
		WHERE p.id = o.product_id 
	) AS order_count	
FROM products AS p;

-- the same as above (but with GROUP BY and JOIN)
SELECT p."name", r.order_count 
FROM products AS p
JOIN (
	SELECT 
		o.product_id, 
		COUNT(*) AS order_count
	FROM orders AS o
	GROUP BY o.product_id
) AS r
	ON r.product_id = p.id;


-- ----------------[ FROM-LESS SELECT ]-----------------

-- query: get the ratio between the max price and the average price
SELECT 
	( SELECT MAX(p.price) FROM products AS p ) / 
	( SELECT AVG(p.price) FROM products AS p) AS price_ratio;
