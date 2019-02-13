import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Lunch from './Lunch';
import Internets from './Internets';
import LunchDetail from './LunchDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Internets} />
            <Route exact path="/lunch" component={Lunch} />
            <Route exact path="/internets" component={Internets} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
