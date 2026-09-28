CREATE DATABASE college;
USE college;

CREATE TABLE student (
	rollno INT,
    name VARCHAR(30),
    age int
);

INSERT INTO student
VALUES 
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student;

// Database queries:
CREATE DATABASE IF NOT EXISTS instagram;
DROP DATABASE IF EXISTS xyz_company;

SHOW DATABASES;
SHOW TABLES;

USE instagram;
SHOW TABLES;

USE college;
SHOW TABLES;



USE instagram;
CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY(id)
);