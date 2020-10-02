import React from 'react';
import Product from '../Product/Product';

const Dashboard = props => {
    const mappedInventory = props.inventory.map((item, i) => (
        <Product 
            key={i}
            item={item}
            newItem={props.newItem}
        />
    ))
    return(
        <div>
            {mappedInventory}
        </div>
    )
}

export default Dashboard;