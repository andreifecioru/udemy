CREATE SCHEMA IF NOT EXISTS phones AUTHORIZATION postgres;

DROP TABLE IF EXISTS phones.phones;

CREATE TABLE IF NOT EXISTS phones.phones (
	id SERIAL PRIMARY KEY,
	model VARCHAR(50),
	manufacturer VARCHAR(50),
	price INTEGER,
	units_sold INTEGER
);

INSERT INTO phones.phones (model, manufacturer, price, units_sold)
VALUES 
	('N1280', 'Nokia', 199, 1925),
	('Iphone 4', 'Apple', 399, 9436),
	('GalaxyS', 'Samsung', 299, 2359),
	('S5620 Monte', 'Samsung', 250, 2385),
	('N8', 'Nokia', 150, 7543),
	('Droid', 'Motorola', 150, 8395),
	('Wave S8500', 'Samsung', 175, 9259);