-- Run data/photo-app.sql first to seed the DB with data

-- basic grouping.
-- NOTE: we can only select columns that are part of the GROUP BY statement
--       or some aggregation function. Most of the times grouping is used in 
--       conjunction with aggregation.
SELECT user_id
FROM "comments"
GROUP BY user_id;

-- basic aggregation: find the longest comment
-- NOTE: in a SELECT statement we are not allowed to mix aggregates and plain column names
SELECT MAX(LENGTH(contents)) AS avg_content_len
FROM "comments";

-- query: compute average comment length by user
SELECT user_id, ROUND(AVG(LENGTH(contents))) AS avg_content_len,
FROM "comments"
GROUP BY user_id;

-- query: compute no. of comments per user
-- NOTE: the COUNT aggregate does not count NULL values
--		 to work around that use COUNT(*)
SELECT user_id, COUNT(*) AS comment_count
FROM "comments"
GROUP BY user_id;

-- query: compute no. of comments per photo
SELECT photo_id, COUNT(*)
FROM "comments"
GROUP BY photo_id;

-- query: compute average comment length by user
--        also display username
SELECT u.username, ROUND(AVG(LENGTH(c.contents)))
FROM "comments" AS c
JOIN users AS u
	ON u.id = c.user_id
GROUP BY u.username;


-- query: show the average comment length per photo 
--        but only for photos with at least 3 comments
-- NOTE: the HAVING statement does for aggregates what WHERE does for individual rows
--       (HAVING always comes *after* GROUP BY)
SELECT photo_id, ROUND(AVG(LENGTH(contents))) 
FROM "comments"
GROUP BY photo_id
	HAVING COUNT(*) >= 3;


-- query: show the users (id and the name) 
--   			where the user has commented on either of the 1st two photos
--        and the user has at least two comments on any of these two photos
SELECT c.user_id, u.username 
FROM "comments" AS c
JOIN users AS u
	ON u.id = c.user_id 
WHERE c.photo_id IN (1, 2)
GROUP BY c.user_id, u.username
	HAVING COUNT(*) >= 2; 
	




