drop table if exists products;
drop table if exists blog;

create table products (
  productID SERIAL,
  title TEXT,
  price int,
  description TEXT,
  images TEXT,
  PRIMARY KEY (productID)
);

create table blog (
  blogID SERIAL,
  title TEXT,
  description TEXT,
  images TEXT,
  PRIMARY KEY (blogID)
);