import React, {Component} from 'react';
import axios from 'axios';

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state = { 
            Editing: false,
            url: '',
            name: '',
            price: ''
        }
    }

    handleToggle = () => {
        this.setState({Editing: !this.state.Editing})
    }

    handleEdit = (id) => {
        const {url, name, price} = this.state;
        this.editItem(id, url, name, price);
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

    editItem = (id, newUrl, newName, newPrice) => {
          let body = {newUrl, newName, newPrice};
          axios.put(`/api/productEdit/${id}`, body)
          .then(res => {
            this.setState({inventory: res.data})
          })
          .catch(err => console.log(err));
        }


    render(){
        console.log()
        return(
            <div className="product">
                <img src={this.props.item.url} alt="product photo" className="productPhoto" />
                        {this.state.Editing
                        ? (
                            <form onSubmit={() => this.handleEdit(this.props.item.id)}>
                                <input className="imageEdit" onChange={(e) => this.imageurl(e)} placeholder="Image URL"></input>
                                <input className="imageEdit" onChange={(e) => this.nameInput(e)} placeholder="Name of item"></input>
                                <input className="imageEdit" onChange={(e) => this.priceChange(e)}placeholder="Price of item"></input>
                                <br></br>
                                <input className="submitbtn" type="submit" />
                            </form>
                          )
                          : (
                             <div className="textContainer">
                                 <div className="productTitle">{this.props.item.name}</div>
                                 <div className="productPrice">{this.props.item.price}</div>
                                 <div className="btnContain">
                                 <button onClick={this.handleToggle}className="itemBtn">Edit</button>
                                 <button className="deletebtn" onClick={() => this.props.deleteItem(this.props.item.id)} className="itemBtn">Delete</button>
                                 </div>
                             </div> 
                          )}
                        </div>
        )
    }
}