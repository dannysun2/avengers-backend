import React, { Component } from 'react';
import './App.css';
import Battlefield from '../src/components/Battlefield'
import 'bulma/css/bulma.css'
import Names from './components/Names'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Names />
        </div>

      </div>
    );
  }
}

export default App;
