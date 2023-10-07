-- Select the 3 users with the highest IDs
SELECT id, username
FROM users
ORDER BY id DESC 
LIMIT 3;

-- Show the username with ID 200 and 
-- all the captions of all posts created by that user
SELECT 
	u.username,
	p.caption 
FROM users AS u
JOIN posts AS p
	ON u.id = p.user_id
WHERE u.id = 200;

-- Show each username and the number of likes they created
SELECT
	u.username,
	l.like_count
FROM users AS u
JOIN (
		SELECT 
			user_id,
			count(*) AS like_count
		FROM likes
		GROUP BY user_id
	) AS l
	ON l.user_id = u.id
ORDER BY u.username; 
	
SELECT 
	u.username,
	count(*) AS like_count
FROM users AS u
JOIN likes AS l
	ON u.id = l.user_id
GROUP BY u.username
ORDER BY u.username;