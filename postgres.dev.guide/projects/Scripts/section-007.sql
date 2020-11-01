-- Run data/e-commerce.sql first to seed the DB with data

-- query: list products order by price (ascending - default ASC)
-- NOTE: name col. is quoted because it is a reserved term (best practice)
SELECT p."name", p.price 
FROM products as p
ORDER BY p.price;

-- query: list products order by price (ascending) then by name (descending)
SELECT p."name", p.price 
FROM products as p
ORDER BY p.price, p."name" DESC;

-- query: list paginated products (10 per page, page 3 - i.e. 2130)
-- NOTE: by convention, LIMIT is placed *before* OFFSET
SELECT p.id, p."name" 
FROM products AS p
LIMIT 10
OFFSET 20;
