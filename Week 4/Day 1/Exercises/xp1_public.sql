--1. Add the following items to the items table: --
-- CREATE TABLE items_list (
--   id serial PRIMARY KEY,
--   price float,
--   items varchar(20)
-- ); 

-- INSERT INTO items_list (price, items) 
							
-- values 
-- 	(100, 'small desk'),
-- 	(300,'large desk'),
-- 	(80, 'fan');

-- select * from items_list

--2. Add 5 new customers to the customers table: -- 
-- create table customers_table (
-- 	id serial primary key,
-- 	"First Name" varchar (20),
-- 	"Last Name" varchar (20)
-- );

-- insert into customers_table ("First Name", "Last Name")

-- values 
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- select * from customers_table



--3. Use SQL to fetch the following data from the database:--

-- select * from items_list
-- select * from items_list where price > 80
-- select * from items_list where price < 300

-- select "Last Name" from customers_table where "Last Name" = 'Smith'
-- select * from customers_table where "Last Name" = 'Jones'
-- select * from customers_table where "First Name" != 'Scott'







