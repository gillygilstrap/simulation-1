
DROP TABLE IF EXISTS inventory
CREATE TABLE IF NOT EXISTS inventory (
    product_id SERIAL PRIMARY KEY,
    name varchar(25),
    price INTEGER,
    image_url TEXT
);
