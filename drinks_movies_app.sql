-- CREATE TABLE person(
--     id serial PRIMARY KEY,
--     fname varchar,
--     lname varchar,
--     email varchar,
--     username varchar,
--     password varchar
-- );

-- CREATE TABLE movie(
--     id serial PRIMARY KEY,
--     name varchar,
--     rating integer check(rating >= 1 and rating <= 5),
--     person_id integer REFERENCES person(id)
-- );

-- CREATE TABLE review(
--     id serial PRIMARY KEY,
--     title varchar,
--     comment varchar,
--     rating integer check(rating >= 1 and rating <= 5),
--     person_id integer REFERENCES person(id),
--     movie_id integer REFERENCES movie(id)
-- );

INSERT INTO person(fname, lname, email, username, password) VALUES ('Jeff', 'Duong', 'jdloolaa@gmail.com', 'jdloolaa', '123456');


