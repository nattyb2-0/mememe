BEGIN;

DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS boards CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS likes CASCADE;

CREATE TABLE users (
  userId SERIAL PRIMARY KEY  ,
  username VARCHAR  NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
 );

CREATE TABLE boards (
board SERIAL PRIMARY KEY,
inmatename  VARCHAR NOT NULL,
statenumber VARCHAR NOT NULL,
nickname    VARCHAR NOT NULL,
institution VARCHAR NOT NULL,
image TEXT  DEFAULT 'http://images.clipartpanda.com/prisoner-clipart-prisoner.png',
created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE posts (
postId SERIAL PRIMARY KEY,
user_id integer REFERENCES users(userId) ,
title VARCHAR NOT NULL,
body text,
board integer REFERENCES boards(board),
created_at TIMESTAMP DEFAULT current_timestamp

);

CREATE TABLE comments(
commentId SERIAL PRIMARY KEY,
postId integer REFERENCES posts(postId) ,
body   text NOT NULL,
userId  integer NOT NULL REFERENCES users(userId) ,
created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE likes(
  likeId SERIAL PRIMARY KEY,
  postId integer REFERENCES posts(postId),
  userId  integer NOT  NULL REFERENCES users( userId ),
  created_at TIMESTAMP DEFAULT current_timestamp
);

-- CREATE TABLE userBoard(
--   userId integer NOT Null REFERENCES users(userId) ON UPDATE CASCADE,
--   board integer NOT Null REFERENCES boards(board) ON UPDATE CASCADE,
--   PRIMARY KEY (userId, board)
-- );


COMMIT;
