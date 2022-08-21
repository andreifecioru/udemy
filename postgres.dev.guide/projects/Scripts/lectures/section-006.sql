-- Run data/e-commerce.sql first to seed the DB with data

-- query: count the paid/unpaid orders
SELECT paid, COUNT(*)
FROM orders AS o
GROUP BY o.paid;

-- query: for each order print user's first and last name and the paid status
SELECT u.first_name, u.last_name, o.paid
FROM orders AS o
JOIN users AS u
	ON u.id = o.user_id;