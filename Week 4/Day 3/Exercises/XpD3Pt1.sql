-- -- XP Day 3 -- --
-- pt I --
-- select * from public.language

-- select title, description, language_id from public.film

-- select 
-- 	film.title as film_title,
-- 	film.description as film_description,
-- 	language.name as language_name
-- from 
-- 	public.film as film
-- join 
-- 	public.language as language on film.language_id = language.language_id;


-- select 
-- 	film.title as film_title,
-- 	film.description as film_description,
-- 	language.name AS language_name
-- from 
-- 	public.language as language 
-- left join 
-- 	public.film as film on language.language_id = film.language_id;


-- create table films2( 
-- 	new_id serial primary key,
-- 	titles2 varchar (50)
-- 	);


-- insert into films2(titles2)
-- values
-- 	('HS Musical'),
-- 	('HS Musical II'),
-- 	('HS Musical III');

-- select * from films2

-- create table customer_review 
-- 	(
--     creview_id serial primary key,
--     new_id int not null,
--     language_id int not null,
--     title varchar(50),
--     score int check (score >= 1 and score <= 10),
--     review_text text,
--     last_update timestamp default current_timestamp,
--     constraint fk_films_id
--         foreign key (new_id)
--         references films2 (new_id)
--         on delete cascade,
--     constraint fk_language_id
--          foreign key (language_id)
--         references language (language_id)
-- );

-- insert into customer_review(new_id, language_id, title, score, review_text)
-- values (1, 1, 'HS Musical II', 7, 'Great film!');

-- insert into customer_review (new_id, language_id, title, score, review_text)
-- values (2, 1, 'HS Musical', 9, 'Very good film!');


-- delete from films2 WHERE new_id = 2;


-- pt2 --

-- update films2
-- set language_id = 3
-- where new_id = 2

-- UPDATE customer_review
-- SET language_id = 3
-- where title = 'HS Musical'

-- drop table customer_review;

-- select title
-- from film
-- where description ilike '%sumo wrestler%'


-- select title
-- from film
-- where length < 60
-- and rating = 'R';





























































