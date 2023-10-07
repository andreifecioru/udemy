CREATE SCHEMA IF NOT EXISTS validations AUTHORIZATION postgres;

-- Constraints can be applied alither at creation time or later using ALTER TABLE

DROP TABLE IF EXISTS products;

CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	
	"name" VARCHAR(50) NOT NULL,
	department VARCHAR(50) NOT NULL UNIQUE,
	
	price INTEGER NOT NULL CHECK(price > 0),
	discount_price INTEGER CHECK(discount_price > 0) DEFAULT 0,
	
	-- multi-column constraints can be specified at the end
	UNIQUE("name", department),
	CHECK(price > discount_price)
);

-- Contraints can be modifed after table creation
ALTER TABLE products
ALTER COLUMN "name"
SET NOT NULL;

ALTER TABLE products
ALTER COLUMN "name"
DROP NOT NULL;



ALTER TABLE products
ALTER COLUMN discount_price
SET DEFAULT 0;

ALTER TABLE products
ALTER COLUMN discount_price
DROP DEFAULT;



ALTER TABLE products
ADD UNIQUE(department);

ALTER TABLE products
DROP CONSTRAINT products_department_key;


-- We can add "named" constraints
ALTER TABLE products
ADD CONSTRAINT my_constraint UNIQUE("name", department);

ALTER TABLE products 
DROP CONSTRAINT my_constraint;

