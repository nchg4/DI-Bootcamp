-- 1. Create a table called students:--
-- create table students_table(
-- 	id serial PRIMARY KEY,
-- 	last_name varchar (20),
-- 	first_name varchar (20),
-- 	dob date 
-- )


-- insert into students_table (last_name, first_name, dob)

-- values 
-- ('Benichou', 'Marc', '1998-11-02'),
-- ('Cohen', 'Yoan', '2010-12-03'),
-- ('Benichou', 'Lea', '1987-07-27'),
-- ('Dux', 'Amelia', '1996-04-07'),
-- ('Grez', 'David', '2003-06-14'),
-- ('Simpson', 'Omer', '1980-10-03');

--1. Fetch all of the data from the table: --
-- select * from students_table

-- select first_name, last_name from students_table 

-- select * from students_table where id = 1

-- select * from students_table where 
-- last_name = 'Benichou'

-- select * from students_table where first_name ilike '%a%';

-- select * from students_table where first_name ilike 'a%';

-- select * from students_table where first_name ilike '%a';

-- select * from students_table where first_name ilike '%a_';

-- select * from students_table where last_name = 'Benichou';

-- select * from students_table where dob >= '2000-01-1'






