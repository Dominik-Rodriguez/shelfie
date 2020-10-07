import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {HashRouter} from 'react-router-dom';
import routes from './routes/routes';

class App extends Component {
  render(){
    return (
      <HashRouter>
      <div className="App">
        <Header />
        <div className="body">
        {routes}
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
