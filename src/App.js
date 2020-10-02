import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: []
    }
    this.newItem = this.newItem.bind(this);
  }

  componentDidMount(){
    axios.get('/api/products')
    .then(res => {
      this.setState({inventory: res.data})
    })
    .catch(err => console.log(err));
  }

  newItem(product){
    axios.post('/api/products', {url: this.url, name: this.name, price: this.price})
    .then(res => {
      this.setState({inventory: res.data})
    }).catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Header />
        <body className="body">
        <Dashboard
        inventory={this.state.inventory}>
          <Product />
        </Dashboard> 
        <Form 
          newItem={this.newItem}
        />
        </body>
      </div>
    );
  }
}

export default App;
