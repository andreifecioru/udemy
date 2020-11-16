-- Run data/e-commerce.sql first to seed the DB with data

-- query: compute the products shipping costs (weight * 10 capped at 200)
-- NOTE: besides LEAST there is also GREATEST
SELECT 
	p."name", 
	p.price, 
	LEAST(p.weight * 10, 200) AS shipping_cost
FROM products AS p;

-- query: show the product name, price and compute a price category as follows:
--          -  if price > 600 show 'high'
--          -  if price > 600 show 'medium'
--          -  if price > 600 show 'cheap'
-- NOTE: if ELSE is ommited, and no condition is satisfied NULL is used as a value.
SELECT 
	p."name",
	p.price,
	CASE
		WHEN p.price > 600 THEN 'high'
		WHEN p.price > 300 THEN 'medium'
		ELSE 'cheap'
	END
FROM products AS p; 