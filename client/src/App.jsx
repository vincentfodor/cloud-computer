import React, { Component } from 'react';

import './App.css';

import Log from './components/Log';
import UserInput from './components/UserInput';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Log />
        <UserInput />
      </div>
    )
  }
}

export default App;