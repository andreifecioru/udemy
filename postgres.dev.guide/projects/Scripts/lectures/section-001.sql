-- table creation
CREATE TABLE IF NOT EXISTS cities (
  name VARCHAR(50),
  country VARCHAR(50),
  population INTEGER,
  area INTEGER
);

-- delete all rows (reset table)
DELETE FROM cities;

-- data insertion
INSERT INTO cities (name, country, population, area)
VALUES 
  ('Tokyo', 'Japan', 38505000, 8223),
  ('Delhi', 'India', 28125000, 2240),
  ('Shanghai', 'China', 22125000, 4015),
  ('Sao Paulo', 'Brazil', 20935000, 3043);

-- data retrieval
SELECT * FROM cities;
SELECT name, country FROM cities;
-- you can specify same column multiple times
SELECT name, name, country FROM cities;

-- calculated columns (compute population density for each city)
SELECT 
    name, population / area AS population_density 
FROM 
    cities;


-- string ops (|| is an alias for the concat function)
SELECT 
    UPPER(CONCAT(name, ', ', country)) AS name_country 
FROM 
    cities;

SELECT
    name || ', ' || UPPER(country) || ', ' || area AS name_country_area
FROM
    cities;
