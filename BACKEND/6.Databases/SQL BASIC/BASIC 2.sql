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

INSERT INTO user
(id, age, name, email, followers, following)
VALUES 
(1, 14, "adam", "adam@yahoo.com", 123, 145),
(2, 15, "bob123", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@gmail.com", 300, 105);



CREATE TABLE post (
	id INT UNIQUE,
    content VARCHAR(100),
    user_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO post 
VALUES 
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Delta", 3);


SELECT id, age, name, email FROM user;
SELECT * FROM user;
SELECT * FROM post;
