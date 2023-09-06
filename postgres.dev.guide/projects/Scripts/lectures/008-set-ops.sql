-- Run data/e-commerce.sql first to seed the DB with data

-- query: get the four most expensive products
SELECT p."name", p.price 
FROM products AS p
ORDER BY p.price DESC 
LIMIT 4;

-- query: get the four most shipping-efficient products (best price/weight ratio)
SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
FROM products AS p
ORDER BY p.price / p.weight DESC
LIMIT 4;

-- query: combine the previous two queries with UNION
-- NOTES: 
--	both queries must select the same number of columns with matching types
--  the name of the columns are dictated by the query on the left of the UNION keyword
--  duplicated rows are included only once in the final output.
(
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price DESC 
	LIMIT 4
) UNION (
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price / p.weight DESC
	LIMIT 4
);

-- query: same as above but w/o de-duplication of rows
(
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price DESC 
	LIMIT 4
) UNION ALL (
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price / p.weight DESC
	LIMIT 4
);

-- query: find the products in the top 4-most expensive products that are also in top 4-most shipping-efficient
-- NOTE: there is also a corresponding INTERSECT ALL statement
(
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price DESC 
	LIMIT 4
) INTERSECT (
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price / p.weight DESC
	LIMIT 4
);

-- query: find the products in the top 4-most expensive products that are *NOT* also in top 4-most shipping-efficient
-- NOTE: there is also a corresponding EXCEPT ALL statement
(
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price DESC 
	LIMIT 4
) EXCEPT (
	SELECT p."name", p.price, p.weight, (p.price / p.weight) AS pw_ratio
	FROM products AS p
	ORDER BY p.price / p.weight DESC
	LIMIT 4
);
