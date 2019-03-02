DROP DATABASE IF EXISTS restaurant_db;

CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE deals(
	id INT(99) NOT NULL AUTO_INCREMENT,
    Manager_name VARCHAR(30) NOT NULL,
    Restaurant_name VARCHAR(30) NOT NULL,
    Phone_number VARCHAR(30) NOT NULL,
    food_deal VARCHAR(30) NOT NULL,
    drink_deal VARCHAR(30) NOT NULL,
    hours VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
    -- FOREIGN KEY (contact_id) REFERENCES contact_db (contact_id)
);
    
CREATE TABLE contacts(
	contact_id INT(99) NOT NULL AUTO_INCREMENT,
    contact_name VARCHAR(30) NOT NULL,
    contact_company VARCHAR(30) NOT NULL,
    PRIMARY KEY(contact_id)
);
    
USE restaurant_db;

SELECT * FROM deals
    
