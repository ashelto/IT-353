-- If you wish to start all over, you can drop all the tables and then the database/schema by uncommenting the code.

-- drop table profile.users;
-- drop table profile.validation_table;
-- drop schema profile restrict;

-- Create a table using the following syntac or interactively via the IDE
create table profile.Users (
  ClientName                  VARCHAR(15),
  Gender                      VARCHAR(6),
  Position                    VARCHAR(20),
  Industries                  VARCHAR(50),
  Interests                   VARCHAR(50)
);

-- Insert into the table the following values
insert into profile.Users values('Billy Lim', 'male', 'professor', 'education;', 'sports;'); 
insert into profile.Users values('Jane Doe', 'female', 'ceo', 'education;entertainment;', 'sports;travel'); 

-- The validation table is merely there for testing a connection purposes.
CREATE TABLE profile.VALIDATION_TABLE (
  KEYCOL                      INTEGER
);
