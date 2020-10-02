import React, {Component} from 'react';

export default class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <header className="Header">
                <div className="circle"></div>
                <p>SHELFIE</p>
            </header>
        )
    }
}