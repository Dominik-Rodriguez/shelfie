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

  newItem(item){
    axios.post('/api/product', {item: item})
    .then(res => {
      this.setState({inventory: res.data})
    }).catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="body">
        <Dashboard
        inventory={this.state.inventory}>
          <Product />
        </Dashboard> 
        <Form 
          newItem={this.newItem}
        />
        </div>
      </div>
    );
  }
}

export default App;
