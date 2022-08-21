CREATE SCHEMA IF NOT EXISTS photoapp AUTHORIZATION postgres;

DROP TABLE IF EXISTS "comments";
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS users;

-- the `id` column is auto-generated (and auto-incremented)
-- NOTE: SERIAL is supported by Postgres. In other SQL envs you would write:
--   id PRIMARY KEY AUTOINCREMENT
CREATE TABLE IF NOT EXISTS photoapp.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) DEFAULT 'john.doe'
);

-- since the 'id' column's type is SERIAL, the values will be generated for us
-- so we don't need to explicitly specify it wnem inserting new row.
INSERT INTO photoapp.users (username)
VALUES
    ('andrei'),
    ('radu'),
    ('maria'),
    ('dumitru');
    
-- define a foreign-key (FK) referencing the id col in the users table
-- when deleting a user the photos associated with it are also deleted
-- other options: 
--   ON DELETE RESTRICT (default)
--   ON DELETE SET NULL
--   ON DELETE SET DEFAULT
CREATE TABLE IF NOT EXISTS photoapp.photos (
    id SERIAL PRIMARY KEY,
    url VARCHAR(200),
    user_id INTEGER 
    	REFERENCES photoapp.users(id) 
    	ON DELETE CASCADE
);

INSERT INTO photoapp.photos (url, user_id)
VALUES
    ('http://andrei/img_001.jpg', 1),
    ('http://andrei/img_002.jpg', 1),
    ('http://radu/img_001.jpg', 2),
    ('http://maria/img_001.jpg', 3),
    ('http://dumitru/img_001.jpg', 4);
    
-- since COMMENTS is a keyword, it is best to quote the 'comments' identifier
CREATE TABLE IF NOT EXISTS photoapp."comments" (
    id SERIAL PRIMARY KEY,
    contents VARCHAR(400),
    user_id INTEGER 
    	REFERENCES photoapp.users(id) 
    	ON DELETE CASCADE,
    photo_id INTEGER 
    	REFERENCES photoapp.photos(id) 
    	ON DELETE CASCADE
);

INSERT INTO photoapp."comments" (contents, user_id, photo_id)
VALUES
    ('Radu > Andrei: Great photo!', 2, 1),
    ('Andrei > Andrei: That was a day to remember...', 1, 1),
    ('Dumitru > Andrei: Wish I were there!', 4, 1),    
    ('Maria > Andrei: When was this?', 3, 2),
    ('Radu > Andrei: This was nice...', 2, 2),
    ('Andrei > Radu: Lucky you!', 1, 3),
    ('Maria > Radu: Beautiful weather!', 3, 3),
    ('Dumitru > Maria: Cool!', 4, 4),
    ('Andrei > Maria: Best photo ever!', 1, 4),
    ('Radu > Dumitru: Nice outfit!', 2, 5),
    ('Andrei > Dumitru: Where did you buy that?', 1, 5);