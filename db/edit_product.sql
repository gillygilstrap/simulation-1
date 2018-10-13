UPDATE inventory SET name = $2
WHERE product_id = $1;

UPDATE inventory SET price = $3
WHERE product_id = $1;

UPDATE inventory SET image_url = $4
WHERE product_id = $1;







