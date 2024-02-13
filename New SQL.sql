create database first;
-- first SQL class
use first;

create table student (
	id int primary key,
    name varchar (10),
    age int,
    grade varchar (3),
    marks int,
    city varchar (10)
);

select * from student;

insert into student (id , name , age, grade, marks, city) values
(101 , "alex" ,45 , "D" ,50,"lahore"),
(102 , "kane" ,50 , "B" ,65,"karachi"),
(103 , "iqbal" ,35 , "A" ,85,"islamabad"),
(104 , "hamza" ,47 , "A+1" ,95,"lahore"),
(105 , "wasif" ,40 , "D" ,95,"lahore");

select * from student;
