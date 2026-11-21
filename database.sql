CREATE DATABASE userlogin;

USE userlogin;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255)
);

INSERT INTO users (username, password)
VALUES
('irfan', '123456'),
('aman', 'aman24'),
('turbo', '5124');

SELECT * FROM users;