-- delete all rows (reset table)
DELETE FROM cities;

-- data insertion
INSERT INTO cities (name, country, population, area)
VALUES 
  ('Tokyo', 'Japan', 38505000, 8223),
  ('Delhi', 'India', 28125000, 2240),
  ('Shanghai', 'China', 22125000, 4015),
  ('Sao Paulo', 'Brazil', 20935000, 3043);
  

-- results filtering

-- NOTE: WHERE filters rows and SELECT filters columns
SELECT name, area FROM cities WHERE area > 4000;

-- equality is tested with a single '=' sign
SELECT name, area FROM cities WHERE area = 8223;

-- not equality comes in 2 flavors
SELECT name, area FROM cities WHERE area != 8223;
SELECT name, area FROM cities WHERE area <> 8223;

-- you can check for intervals
SELECT name, area FROM cities WHERE area BETWEEN 4000 AND 5000;

-- you can check for inlcusion in a list of values
SELECT name, area FROM cities WHERE name IN ('Delhi', 'Shanghai');
SELECT name, area FROM cities WHERE name NOT IN ('Delhi', 'Shanghai');


-- you can do column operations inside WHERE clauses
SELECT
    name,
    area,
    population / area AS density
FROM
    cities
WHERE
    population / area > 6000;


-- compound WHERE clauses (with AND/OR combinators)
SELECT
    name, area
FROM
    cities
WHERE
    name NOT IN ('Delhi', 'Shanghai') 
    AND name = 'Tokyo'
    OR name = 'Sao Paulo';
    
-- updating records
UPDATE cities SET population = 39505000 WHERE name = 'Tokyo';

-- deleting records
DELETE FROM cities WHERE name = 'Tokyo';