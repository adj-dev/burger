-- Create the database --
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table --
CREATE TABLE burgers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE
);