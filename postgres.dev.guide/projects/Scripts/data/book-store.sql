CREATE SCHEMA IF NOT EXISTS bookstore AUTHORIZATION postgres;

DROP TABLE IF EXISTS bookstore.reviews;
DROP TABLE IF EXISTS bookstore.books;
DROP TABLE IF EXISTS bookstore.authors;


CREATE TABLE IF NOT EXISTS bookstore.authors (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS bookstore.books (
	id SERIAL PRIMARY KEY,
	title VARCHAR(50),
	author_id INTEGER
		REFERENCES bookstore.authors(id)
		ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS bookstore.reviews (
	id SERIAL PRIMARY KEY,
	rating INTEGER DEFAULT 1,
	author_id INTEGER
		REFERENCES bookstore.authors(id)
		ON DELETE CASCADE,
	book_id INTEGER
		REFERENCES bookstore.books(id)
		ON DELETE CASCADE
);

INSERT INTO bookstore.authors (name)
VALUES
	('JK Rowling'),
	('Stephen King'),
	('Agatha Cristie'),
	('Dr Seuss');
	
INSERT INTO bookstore.books (title, author_id)
VALUES
	('It', 2),
	('Just Another Book', 2),
	('Chamber of Secrets', 1),
	('Cat and the Hat', 4),
	('Affair at Styles', 3);	
	
INSERT INTO bookstore.reviews (rating, author_id, book_id)
VALUES
	(3, 1, 2),
	(4, 2, 4),
	(3, 4, 3);