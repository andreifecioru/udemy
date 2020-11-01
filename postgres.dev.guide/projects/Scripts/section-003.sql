-- Run data/photo-app.sql first to seed the DB with data

SELECT * FROM users;
SELECT * FROM photos;

SELECT * FROM photos WHERE user_id = 1;

-- basic joining of 2 tables
SELECT username, url
FROM photos JOIN users
ON photos.user_id = users.id;

-- cannot insert a photo referencing a non-existent user
INSERT INTO photos (url, user_id)
VALUES
    ('http://gigi/img_001.jpg', 100);

-- we can insert a photo w/o specifying a user (if the user_id col is marked as nullable)
INSERT INTO photos (url)
VALUES ('http://anon/img_001.jpg');

-- when deleting a user, the photos associated with it are also deleted
-- because this is how we configured the FK to behave
DELETE FROM users WHERE username = 'andrei';

    