DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS users;

-- the `id` column is auto-generated (and auto-incremented)
-- NOTE: SERIAL is supported by Postgres. In other SQL envs you would write:
--   id PRIMARY KEY AUTOINCREMENT
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50)
);

INSERT INTO users (username)
VALUES
    ('andrei'),
    ('radu'),
    ('maria'),
    ('dumitru');
    
-- define a foreign-key (FK) referencing the id col in the users table
-- when deleting a user the photos associated with it are also deleted
CREATE TABLE IF NOT EXISTS photos (
    id SERIAL PRIMARY KEY,
    url VARCHAR(200),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO photos (url, user_id)
VALUES
    ('http://andrei/img_001.jpg', 1),
    ('http://andrei/img_002.jpg', 1),
    ('http://radu/img_001.jpg', 2),
    ('http://maria/img_001.jpg', 3),
    ('http://dumitru/img_001.jpg', 4);