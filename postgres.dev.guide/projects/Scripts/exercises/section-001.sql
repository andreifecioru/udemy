-- EXERCISE 1

CREATE TABLE IF NOT EXISTS movies (
	title VARCHAR(50),
	box_office INTEGER
);

DELETE FROM movies;


INSERT INTO movies(title, box_office)
VALUES
 ('Titanic', 50000),
 ('The Mask', 800000);
 

SELECT * FROM movies;


-- EXERCISE 2

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
	

SELECT name, '$' || price * units_sold AS revenue
FROM phones;