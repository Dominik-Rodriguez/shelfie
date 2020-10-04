-- insert into inventory(url, name, price)
-- values(${url}, ${name}, ${price});

-- select * from inventory;

INSERT INTO inventory 
( url, name, price ) 
VALUES 
( $1, $2, $3)

returning *;