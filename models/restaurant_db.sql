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

INSERT INTO deals(Manager_name, Restaurant_name, Phone_number, food_deal, drink_deal,hours, createdAt, updatedAt)
value ("Monique Morales", "GW Coding", "5716066253","half off all appetizers", "$5 cocktails", "7pm-9pm", NOW(), NOW());
    
USE restaurant_db;

SELECT * FROM deals
