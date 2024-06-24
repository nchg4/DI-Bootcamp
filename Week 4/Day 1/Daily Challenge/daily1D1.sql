-- create table property (
-- 	id serial primary key,
-- 	city varchar (50) not null,
-- 	actor_id int,

-- 	foreign key (actor_id) references actors(actor_id) 
-- );

-- insert into property(city, actor_id) values (
-- 	'Miami',
-- 7
-- 	);

-- select actor_id from actors where first_name = 'Brad' and last_name = 'Pitt'

----specifc the feild names (that we want tosee) from both sides
select actors.actor_id, actors.first_name, actors.last_name, actors.age, property.city
from actors
left join property
on actors.actor_id = property.actor_id;