DROP DATABASE IF EXISTS cafe_db;

CREATE DATABASE cafe_db;

USE cafe_db;

-- create table cats (
--     id INT NOT NULL,
--     cat_name VARCHAR,
--     breed VARCHAR,
--     size INT NOT NULL,
--     affection INT,
--     availablity BOOLEAN,
--     picture VARCHAR
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE users (
--     id INT NOT NULL,
--     first_name VARCHAR NOT NULL,
--     last_name VARCHAR NOT NULL,
--     email VARCHAR NOT NULL,
--     password VARCHAR NOT NULL,
--     cat_id INT,
--     FOREIGN KEY (cat_id)
--     REFERENCES cats(id)
-- );