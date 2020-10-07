// import React from 'react';
// import Product from '../Product/Product';

// const Dashboard = props => {
//     const mappedInventory = props.inventory.map((item, i) => (
//         <Product 
//             key={i}
//             item={item}
//             newItem={props.newItem}
//             deleteItem={props.deleteItem}
//             editItem={props.editItem}
//         />
//     ))
//     return(
//         <div>
//             {mappedInventory}
//         </div>
//     )
// }

// export default Dashboard;

import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventory: []
          }
    }

    componentDidMount(){
        this.getItem();
    }

    getItem(){
        axios.get('/api/products')
        .then(res => {
          this.setState({inventory: res.data})
        }).catch(err => console.log(err));
      }

      deleteItem = (id) => {
        axios.delete(`/api/productDelete/${id}`)
        .then(res => {
          this.setState({inventory: res.data})
        })
        .catch(err => console.log(err));
      }

      editItem = (id, newUrl, newName, newPrice) => {
        let body = {newUrl, newName, newPrice};
        axios.put(`/api/productEdit/${id}`, body)
        .then(res => {
          this.setState({inventory: res.data})
        })
        .catch(err => console.log(err));
      }

      newItem(item){
        axios.post('/api/product', {url: item.url, name: item.name, price: item.price})
        .then(res => {
          this.setState({inventory: res.data})
        }).catch(err => console.log(err));
      }

    render(){
        const mappedInventory = this.state.inventory.map((item, i) => (
            <Product 
                key={i}
                item={item}
                newItem={this.newItem}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
            />
        ))
        return(
            <div>
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard;