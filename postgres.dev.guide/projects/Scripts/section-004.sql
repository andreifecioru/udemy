-- Run photo-app.sql first to seed the DB with data

-- For a visual description of various types of join
-- see docs/cheatsheat.joins.pdf

SELECT * FROM users;
SELECT * FROM photos;
SELECT * FROM "comments";


-- basic 2-way join
-- in a select, you can alias the name of the table to save some typing
SELECT c.contents, p.url
FROM "comments" AS c
JOIN photos AS p 
    ON p.id = c.photo_id;


-- 3-way joins
-- NOTE: you can drop AS keyword in table aliases (though it is recommended to be explicit)
SELECT u.username, p.url, c.contents
FROM users u 
JOIN "comments" c
    ON u.id = c.user_id
JOIN photos p
    ON p.id = c.photo_id;

-- Query: find the situation where a user posted comment on their own photo.
SELECT u.username, c.contents, p.url  
FROM users AS u
JOIN "comments" AS c 
	ON u.id = c.user_id
JOIN photos AS p
    ON p.id = c.photo_id
WHERE
    c.user_id = p.user_id;

-- this produces the same output as the query above (because we use INNER JOIN)
-- NOTE: you can combine multiple matching criteria inside an ON statement
SELECT u.username, c.contents, p.url, c.user_id AS c_user_id, p.user_id AS p_user_id 
FROM "comments" AS c 
JOIN photos AS p
	ON p.id = c.photo_id
JOIN users AS u
    ON u.id = p.user_id AND u.id = c.user_id;


   

-- ------------[ TYPES OF JOIN ]----------------

-- insert a photo w/o a user
INSERT INTO photos (url)
VALUES ('http://no-user/img_001.jpg');
-- insert a user w/o a photo
INSERT INTO users (username)
VALUES ('Alex');

/*
INNER JOIN: 
	- does not include the photo w/o the user 
	- does not include the user w/o a photo
NOTE: all listed records must be matched in both tables to be included in the result set
*/
SELECT p.url, u.username
FROM photos AS p
JOIN users AS u
    ON u.id = p.user_id;

/*
LEFT JOIN:
	- includes the photo w/o the user
	- does not include the user w/o the photo
NOTE: the photos table is the one one the *left* side of the JOIN statement
*/ 
SELECT p.url, u.username
FROM photos AS p
LEFT JOIN users AS u
    ON u.id = p.user_id;

/*
RIGHT JOIN:
	- does not include the photo w/o the user
	- includes the user w/o the photo
NOTE: the users table is the one one the *right* side of the JOIN statement
*/
SELECT p.url, u.username
FROM photos AS p
RIGHT JOIN users AS u
    ON u.id = p.user_id;

/*
FULL JOIN:
	- includes the photo w/o the user
	- includes the user w/o the photo
NOTE: records from both sides of the JOIN statement are included regardless
*/
SELECT p.url, u.username
FROM photos AS p
FULL JOIN users AS u
    ON u.id = p.user_id;

