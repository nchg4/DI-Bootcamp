-- -- -- Daily Challenge: Part I -- -- --

-- create table customers(
-- 	customer_id serial primary key,
-- 	first_name varchar (50) not null,
-- 	last_name varchar (50) not null
-- );

-- create table customer_profile(
-- 	id serial primary key,
-- 	is_logged_in boolean DEFAULT FALSE,
-- 	customer_id int references customers(customer_id)
-- );

-- insert into customers(first_name, last_name)
-- values 
-- 	('John', 'Doe'), 
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive');



-- insert into customer_profile( is_logged_in, customer_id)

-- 	values 
-- 	(
-- (select true from customers where first_name ='John' and last_name = 'Doe'),
-- (select customer_id from customers where first_name = 'John' and last_name = 'Doe')
-- ),
-- 	(
-- (select false from customers where first_name ='Jerome' and last_name = 'Lalu'),
-- (select customer_id from customers where first_name = 'Jerome' and last_name = 'Lalu')	
-- );



-- select customers.first_name 
-- from customers
-- join customer_profile
-- on customers.customer_id = customer_profile.customer_id
-- where customer_profile.is_logged_in = true

-- select customers.first_name, COALESCE (customer_profile.is_logged_in, false) as isloggedin 
-- from customers
-- left join customer_profile
-- on customers.customer_id = customer_profile.customer_id;

-- select count (customers.first_name) 
-- from customers
-- join customer_profile
-- on customers.customer_id = customer_profile.customer_id
-- where customer_profile.is_logged_in = false



-- -- -- Daily Challenge: Part II -- -- --

-- create table book(
-- 	book_id SERIAL PRIMARY KEY,
-- 	title varchar (50) NOT NULL,
-- 	author varchar (50) NOT NULL
-- );


-- insert into book(title, author)
-- values
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter',' J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee');


-- create table student(
-- 	student_id serial primary key,
-- 	"name" varchar (50) not null unique,
-- 	age integer CHECK (age <= 15)
-- );


-- insert into student("name", age)
-- values 
-- 	('John', 12),
-- 	('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14);


-- create table Library1(
--     book_fk_id integer REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     student_fk_id integer REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     borrowed_date date
-- );



-- insert into Library1(book_fk_id, student_fk_id, borrowed_date)
-- values
-- 	(
-- 	(select book_id from book where title = 'Alice In Wonderland'),
-- 	(select student_id from student where "name" = 'John'),
-- 	'2022-02-15'	
-- 	);

-- insert into Library1(book_fk_id, student_fk_id, borrowed_date)
-- values
-- 	(
-- 	(select book_id from book where title = 'To kill a mockingbird'),
-- 	(select student_id from student where "name" = 'Bob'),
-- 	'2021-03-03'	
-- 	);

-- insert into Library1(book_fk_id, student_fk_id, borrowed_date)
-- values
-- 	(
-- 	(select book_id from book where title = 'Alice In Wonderland'),
-- 	(select student_id from student where "name" = 'Lera'),
-- 	'2021-05-23'	
-- 	);




-- select * 
-- from Library1


-- SELECT student.name 
-- AS student_name, book.title 
-- AS book_title
-- FROM Library1
-- JOIN student ON Library1.student_id = student.student_id
-- JOIN books  
-- ON Library1.book_fk_id = book.book_id;

-- select student.name 
-- as student_name, book.title 
-- as book_title
-- from Library1
-- join student
-- on Library1.student_fk_id = student.student_id
-- join book 
-- on Library1.book_fk_id = book.book_id;

-- select round(avg(student.age)) 
-- as average_age
-- from student
-- join Library1
-- on student.student_id = Library1.student_fk_id
-- join book
-- on Library1.book_fk_id = book.book_id
-- where book.title = 'Alice In Wonderland';

DELETE FROM student
WHERE "name" = 'Bob'; 

































