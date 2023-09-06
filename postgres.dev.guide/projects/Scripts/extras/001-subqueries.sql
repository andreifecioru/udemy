-- Video lecture: https://www.youtube.com/watch?v=nJIEIzF7tDw&list=WL&index=23&t=964s
-- Run data/e-commerce.sql first to seed the DB with data


-- ---------[Q: Find the products with price more than the avg. price]------------

-- This uses a sub-query in the WHERE clause (i.e. scalar sub-query)
SELECT 
	"name",
	price
FROM products
WHERE price > (
	SELECT avg(price) FROM products 
);

-- We can also use a JOIN. 
-- This is helpful if we also want to display the avg price as a separate column
SELECT 
	"name",
	price,
	avg_price
FROM
	products AS p
JOIN
	(SELECT avg(price) AS avg_price FROM products) AS a
ON
	p.price > a.avg_price
ORDER BY price;




-- -----------[ Q: Find the products with the highest price in each dept]-------------

SELECT 
	p."name",
	p.department,
	p.price 
FROM products AS p
-- NOTE: we can match on multiple cols (the sape of the sub-query must match)
WHERE (p.department, p.price) IN (  
	SELECT 
		p1.department, 
		max(p1.price) AS max_price
	FROM products AS p1
	GROUP BY p1.department
)
ORDER BY p.department;


-- Same result using JOIN (with access to max_price col)
SELECT 
	p."name",
	p.department,
	p.price,
	p1.max_price
FROM products AS p
JOIN
	(
		SELECT 
			p1.department, 
			max(p1.price) AS max_price
		FROM products AS p1
		GROUP BY p1.department
	) AS p1
ON p.department = p1.department AND 
	 p.price = p1.max_price
ORDER BY p.department;




-- --------[ Q: Find the dept with exactly 7 products ]--------------

SELECT
	p.department,
	count(*) AS product_count
FROM products AS p 
GROUP BY p.department
HAVING count(*) = 7;




-- ----------[ Q: Find the products with exactly 4 orders ]-------------

SELECT
	p."name",
	p.department,
	p.price
FROM products AS p
WHERE p.id IN (
	SELECT 
		o.product_id
	FROM orders AS o
	GROUP BY o.product_id
	HAVING count(*) = 4
);

-- Same using JOIN (with order_count extra column)
SELECT 
	p."name",
	p.department,
	p.price,
	o1.order_count
FROM
	products AS p
JOIN (
	SELECT 
		o.product_id,
		count(*) AS order_count
	FROM orders AS o
	GROUP BY o.product_id
	HAVING count(*) = 4
) AS o1
ON p.id = o1.product_id;




-- -------[ Q: Find the products in each dept with a price greater that the avg in that dept ]-----
-- Use a correlated sub-query: the sub-query is related to the outer-query
-- NOTE: correlated sub-queries are EXPENSIVE since they are executed for each row from the outer-query
SELECT 
	p."name",
	p.department,
	p.price 
FROM products AS p
WHERE p.price > (
	SELECT 
		avg(p1.price) AS avg_price 
	FROM products AS p1 
	WHERE p.department = p1.department
)
ORDER BY p.department;



-- --------[ Q: find the products with no orders different than 4 ]-----------
-- NOTE: not optimal, but possible: double-nested query with correlated sub-query
SELECT 
	p."name"
FROM products AS p
WHERE NOT EXISTS (
	-- in this case, we don't care what we select (just use a constant)
	SELECT 1  
	FROM (
		SELECT 
			o.product_id
		FROM orders AS o
		GROUP BY o.product_id
		HAVING count(*) = 4
	) AS o1
	WHERE p.id = o1.product_id
);
