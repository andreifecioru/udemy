-- EXERCISE 1

SELECT b.title, a."name"
FROM bookstore.books AS b
JOIN bookstore.authors AS a
	ON b.author_id = a.id;
	
-- EXERCISE 2
SELECT a."name", b.title
FROM bookstore.books AS b
JOIN bookstore.authors AS a
	ON b.author_id = a.id
JOIN bookstore.reviews AS r
	ON r.book_id = b.id AND r.author_id = b.author_id;