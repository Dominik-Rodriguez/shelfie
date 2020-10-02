import React, {Component} from 'react';

export default class Product extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.item.url}
                {this.props.item.name}
                {this.props.item.price}
            </div>
        )
    }
}