// import e from 'express';
import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: '',
            name: '',
            price: 0
        }
        this.imageurl = this.imageurl.bind(this);
        this.nameInput = this.nameInput.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // this.newItems = this.newItems.bind(this);
        // this.props.newItem();
    }

    handleReset(){
        this.setState({url: ''})
        this.setState({name: ''})
        this.setState({price: 0})
    }

    imageurl(e){
        this.setState({url: e.target.value})
    }

    nameInput(e){
        this.setState({name: e.target.value})
    }

    priceChange(e){
        this.setState({price: e.target.value})
    }

    newItems = () => {
        let newItem = {
            url: this.state.url,
            name: this.state.name,
            price: this.state.price
        }
        this.props.newItem(newItem);
    }

    render(){
        console.log(this.state.url)
        return(
            <div className="form">
                <div className="preview"></div>
                <p>Image URL:</p>
                <input type="text" placeholder="Product URL" onChange={this.imageurl} value={this.state.url}></input>
                <p>Product Name:</p>
                <input type="text" placeholder="Product Name" onChange={this.nameInput} value={this.state.name}></input>
                <p>Price: </p>
                <input type="text" placeholder="price" onChange={this.priceChange} value={this.state.price}></input>
                <div className="btncontainer">
                    <button onClick={() => {this.handleReset()}} className="btn">Cancel</button>
                    <button onClick={() => {this.newItems(this.state.url, this.state.name, this.state.price)}}className="btn">Add to Inventory</button>
                </div>
            </div>
        )
    }
}