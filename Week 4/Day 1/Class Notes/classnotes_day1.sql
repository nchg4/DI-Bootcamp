-- CREATE TABLE house_expenses (
--   id serial PRIMARY KEY,
--   date_paid date,
--   watet float,
--   electricity float,
--   paid_by varchar(20)
-- ); 

-- INSERT INTO house_expenses(date_paid, watet,
-- 	                              electricity, paid_by ) 
							
-- values (	
-- 	'2024-01-01',
-- 	 50.5,
-- 	 120.4,
-- 	 'Noam'
-- 	),
-- (
-- 	'2024-01-02',
-- 	22.30,
-- 	122.12,
-- 	'X'
-- 	),
-- (
-- 	'2024-12-30',
-- 	19.84,
-- 	212.01,
-- 	'Y'
-- 	),
-- (
-- 	'2024--1-02',
-- 	82.22,
-- 	127.8,
-- 	'Z'
-- 	),
-- (
-- 	'2022-08-22',
-- 	23.4,
-- 	12.8,
-- 	'XY'
-- 	);


-- select * from house_expenses

-- select electricity from house_expenses

-- select electricity, watet from house_expenses

-- select * from house_expenses

-- where id = 3;

-- select paid_by from house_expenses where paid_by Noam
----^not working

-- select count(*) from 
-- house_expenses where paid_by = 'Noam'

-- select max(watet) from house_expenses

-- select min(electricity) from house_expenses


-- select avg(electricity) from house_expenses where paid_by != 'Noam'

-- select count(paid_by), paid_by from house_expenses group by paid_by;
 
-- select sum(watet + electricity), paid_by from house_expenses
	-- group by paid_by;

-- select max(watet + electricity), paid_by from house_expenses
	-- group by paid_by;


-- update house_expenses
-- set paid_by = 'Ron' where id = 1;
-- select * from house_expenses;

-- select * from house_expenses order by id;

-- delete from house_expenses where electricity  < '50';
-- select * from house_expenses order by id;

-- delete from house_expenses where date_paid > '2024-04-01'
-- select * from house_expenses order by id;

select * from house_expenses where paid_by ilike 'noam';




