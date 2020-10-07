update inventory
-- set url = ${url}, name = ${name}, price = ${price}
set url = $2, name = $3, price = $4
where id = $1;

select * from inventory;