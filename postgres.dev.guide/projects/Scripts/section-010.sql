-- Run data/e-commerce.sql first to seed the DB with data

-- query: count the number of departments
-- NOTES:
--   - DISTINCT can olny be used as part of SELECT statements
--   - you can pass to it a list of columns and it will disply all the unique 
--     combinations of said column values
--   - if you pass it more than one column, you cannot use COUNT on it

SELECT COUNT(DISTINCT p.department)
FROM products AS p;

-- query: display all unique combinations of product names and departments
SELECT DISTINCT p."name", p.department 
FROM products AS p;