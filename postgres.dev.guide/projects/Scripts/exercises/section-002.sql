
CREATE TABLE IF NOT EXISTS phones (
	name VARCHAR(50),
	manufacturer VARCHAR(50),
	price INTEGER,
	units_sold INTEGER
);

DELETE FROM phones;

INSERT INTO phones (name, manufacturer, price, units_sold)
VALUES 
	('N1280', 'Nokia', 199, 1925),
	('Iphone 4', 'Apple', 399, 9436),
	('GalaxyS', 'Samsung', 299, 2359),
	('S5620 Monte', 'Samsung', 250, 2385),
	('N8', 'Nokia', 150, 7543),
	('Droid', 'Motorola', 150, 8395),
	('Wave S8500', 'Samsung', 175, 9259);

	
-- EXERCISE 1

SELECT name, price 
FROM phones
WHERE units_sold > 5000;


-- EXERCISE 2

SELECT name, manufacturer
FROM phones 
WHERE manufacturer IN ('Apple', 'Samsung');


-- EXERCISE 3
SELECT name, price * units_sold AS total_revenue
FROM phones
WHERE price * units_sold > 1000000;


-- EXERCISE 4
UPDATE phones
SET units_sold = 8543
WHERE name = 'N8';

SELECT * FROM phones;


-- EXERCISE 5
DELETE FROM phones 
WHERE manufacturer = 'Samsung';

SELECT * FROM phones;

