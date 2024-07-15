-- --In the dvdrental database write a query to select all the columns from the “customer” table:--

-- SELECT * FROM public.customer
-- ORDER BY customer_id ASC; 

-- --Write a query to display the names (first_name, last_name) using an alias named “full_name”:--

-- SELECT first_name || ', ' || last_name as full_name from actor;


-- --Lets get all the dates that accounts were created --
-- --Write a query to select all the create_date from the “customer” table --
-- --(there should be no duplicates): --

-- select create_date from customer 
 

-- --Write a query to get all the customer details from the customer table, --
-- --it should be displayed in descending order by their first name: --

-- select first_name from customer 
-- order by first_name desc;


-- --Write a query to get the film ID, title, description, year of release --
-- --and rental rate in ascending order according to their rental rate: --

-- select film_ID, description, release_year, rental_rate from film
-- order by rental_rate desc;


-- --Write a query to get the address, and the phone number of all customers --
-- --living in the Texas district, these details can be found in the “address” table: --

-- select address, phone from address
-- where district = 'Texas';


-- --Write a query to retrieve all movie details where the movie id is either 15 or 150: --

-- select * from film 
-- where film_id = 150;


-- --Write a query which should check if your favorite movie exists in the database --
-- --Have your query get the film ID, title, description, length and the rental rate, --
-- --these details can be found in the “film” table: --

-- select * from film where title ilike '%moon%';



-- --No luck finding your movie? Maybe you made a mistake spelling the name --
-- --Write a query to get the film ID, title, description, length and the rental --
-- --rate of all the movies starting with the two first letters of your favorite movie: --

-- select film_id, title, description, "length", rental_rate from film where title ilike '%Mo%'


-- --Write a query which will find the 10 cheapest movies: --

-- select title, replacement_cost from film 
-- order by replacement_cost
-- limit 10;


-- --Not satisfied with the results. Write a query which will find the next 10 cheapest movies: --

-- select title, replacement_cost from film 
-- order by replacement_cost
-- offset 10
-- limit 10;
