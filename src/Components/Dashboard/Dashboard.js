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

// import React, {Component} from 'react';
// import Product from '../Product/Product';

// class Dashboard extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         const mappedInventory = this.props.inventory.map((item, i) => (
//             <Product 
//                 key={i}
//                 item={item}
//                 newItem={this.props.newItem}
//             />
//         ))
//         return(
//             <div>
//                 {mappedInventory}
//             </div>
//         )
//     }
// }

// export default Dashboard;