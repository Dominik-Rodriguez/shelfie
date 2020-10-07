import React, {Component} from 'react';
import {Link, HashRouter} from 'react-router-dom';

export default class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <HashRouter>
            <header className="Header">
                <div className="circle"></div>
                <p>SHELFIE</p>
                <Link to="/"><button className="Navbtn">Dashboard</button></Link>
                <Link to="/Form"><button className="Navbtn">Add Inventory</button></Link>
            </header>
            </HashRouter>
        )
    }
}