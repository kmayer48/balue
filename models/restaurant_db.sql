CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE HHdeals(
	id INT(99) NOT NULL AUTO_INCREMENT,
    Restaurant_name VARCHAR(30) NOT NULL,
    food_deal VARCHAR(30) NOT NULL,
    drink_deal VARCHAR(30) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (contact_id) REFERENCES contact_db (contact_id)
    );
    
CREATE TABLE contacts(
	contact_id INT(99) NOT NULL AUTO_INCREMENT,
    contact_name VARCHAR(30) NOT NULL,
    contact_companyname VARCHAR(30) NOT NULL,
    PRIMARY KEY(contact_id)
    );
    
