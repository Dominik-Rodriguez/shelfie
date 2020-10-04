import React, {Component} from 'react';

export default class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="product">
                <img src={this.props.item.url} alt="product photo" className="productPhoto" />
                <div className="textContainer">
                    <div className="productTitle">{this.props.item.name}</div>
                    <div className="productPrice">{this.props.item.price}</div>
                </div>
            </div>
        )
    }
}