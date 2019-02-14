create database crud;
use crud;

create table data (
  id int(11) auto_increment primary key,
  name varchar(30) not null,
  email varchar(30) not null,
);

