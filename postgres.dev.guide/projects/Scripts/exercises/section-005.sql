-- EXERCISE 1
SELECT a.id, a."name", COUNT(*) AS book_count
FROM bookstore.books AS b
JOIN bookstore.authors AS a 
	ON b.author_id = a.id
GROUP BY a.id, a."name";


-- EXERCISE 2
SELECT 
	p.manufacturer, 
	SUM(p.price * p.units_sold) AS total_revenue
FROM phones.phones AS p
GROUP BY p.manufacturer
	HAVING SUM(p.price * p.units_sold) > 2000000;