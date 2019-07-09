import React, { Component } from 'react';

import './App.css';

import Log from './components/Log';
import UserInput from './components/UserInput';

class App extends Component {
  state = {
    log: [
      {
        command: 'tracert 127.0.0.1',
        response: '...',
        user: 'vincent',
        host: 'localhost'
      }
    ]
  }

  addEntryToLog = command => {
    const entry = {
      command: command,
      response: '...',
      user: 'root',
      host: '127.0.0.1'
    }

    this.setState(prevState => ({
      log: [
        ...prevState.log,
        entry
      ]
    }));
  }

  render() {
    return (
      <div className="app">
        <Log log={this.state.log} addEntryToLog={this.addEntryToLog} />
        <UserInput />
      </div>
    )
  }
}

export default App;