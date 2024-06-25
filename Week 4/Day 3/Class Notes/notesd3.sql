-- create table movies(
-- movie_id serial primary key,
-- title varchar(50) unique not null
-- );


-- create table actors_movies(
-- id serial primary key,
-- actor_id int references actors(actor_id),
-- movie_id int references movies(movie_id)
-- );

-- (select actor_id from actors where first_name = 'Brad' and last_name = 'Pitt');

-- insert into movies(title) values ('Meet Joe Black'), ('Mr as and Mrs Smith'), ('Good Will hunting'), ('Oceans Eleven');

-- insert into actors_movies (actor_id, movie_id) values 
-- ((select actor_id from actors where first_name = 'Matt' and last_name = 'Damon' limit 1), (select movie_id from movies where title ilike '%Ocean%'));


select actors.first_name, actors.last_name, movies.title 
from actors
join actors_movies 
on actors.actor_id = actors_movies.actor_id
join movies 
on movies.movie_id = actors_movies.movie_id;



