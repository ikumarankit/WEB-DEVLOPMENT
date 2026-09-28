-- WHERE Clause --  

SELECT * FROM user 
WHERE followers >= 200;

SELECT name, followers FROM user 
WHERE followers >= 200;

SELECT name FROM user 
WHERE followers >= 200;


-- Operators used in WHERE clause 

SELECT name, age, followers
FROM user 
WHERE age > 15 AND followers > 200;

SELECT name, age, followers
FROM user 
WHERE age > 15 OR followers > 200;

SELECT name, age, followers
FROM user 
WHERE age BETWEEN 15 AND 18;

SELECT name, age, followers
FROM user 
WHERE email IN ("adam@yahoo.com", "casey@gmail.com", "abc@gmai.com");

-- Insert more data in user table 
INSERT INTO user
VALUES 
(4, 17, "donald", "donald@yahoo.com", 200, 195),
(5, 14, "eve", "eve@gmail.com", 2020, 2008),
(6, 17, "farah", "farahgmail.com", 3000, 1055); 

SELECT name, age, followers 
FROM user 
WHERE age IN (14, 16);


SELECT name, age, followers 
FROM user 
WHERE age NOT IN (14, 16);



-- LIMIT clause:
SELECT * 
FROM user
LIMIT 3;

SELECT name, age, followers
FROM user 
WHERE age > 13
LIMIT 3;


-- ORDER BY clause:
SELECT name, age, followers
FROM user
ORDER BY followers ASC;

SELECT name, age, followers
FROM user
ORDER BY followers DESC;

SELECT name, age, followers
FROM user
ORDER BY followers;


-- Aggregate Functions 
SELECT MAX(followers)
FROM user; 

SELECT MAX(age)
FROM user; 

SELECT count(age)
FROM user;

SELECT COUNT(age) 
FROM user
WHERE age > 15;

SELECT avg(age) 
FROM user;

SELECT min(age) 
FROM user;

SELECT sum(followers) 
FROM user;


-- GROUP BY Clause: 
-- here we group on the basis of age and the display the count  
SELECT age 
FROM user
GROUP BY age;

SELECT count(age)
FROM user 
GROUP BY age;

SELECT count(id)
FROM user 
GROUP BY age;

SELECT age, count(id)
FROM user 
GROUP BY age;

SELECT count(id)
FROM user 
GROUP BY name;

-- we need to find the maximum followers of each age group 
SELECT age, max(followers) 
FROM user
GROUP BY age; 

-- the below code gives error because grouping in not done on the basis of name it is done on the basis of age so we can write age only outside the aggregate function  
SELECT name, age, max(followers) 
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;


-- General Order:
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY max(followers) DESC;




-- More Table Queries:
-- UPDATE

SET SQL_SAFE_UPDATES = 0;
UPDATE user
SET followers = 600
WHERE age = 16;  

SELECT * 
FROM user;


-- DELETE 

DELETE FROM user
WHERE age = 14;

SELECT *
FROM user; 


-- ALTER 
-- ADD COLUMN 
ALTER TABLE user 
ADD COLUMN city VARCHAR(50) DEFAULT "Delhi";

SELECT *
FROM user; 

-- DROP COLUMN 
ALTER TABLE user
DROP COLUMN city;

ALTER TABLE user
DROP COLUMN age;

SELECT *
FROM user; 


-- RENAME TABLE:
ALTER TABLE user
RENAME TO instaUser;

-- CHANGE COLUMN 
ALTER TABLE user 
CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT *
FROM user;

-- MODIFY 
ALTER TABLE user 
MODIFY followers INT DEFAULT 5;