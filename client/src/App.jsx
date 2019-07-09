import React, { Component } from 'react';

import './App.css';

import Log from './components/Log';
import UserInput from './components/UserInput';

import commandListener from './listeners/commandlistener';

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

  addEntryToLog = e => {
    e.preventDefault();

    const command = e.target.command.value;

    const response = commandListener(command);

    const entry = {
      command: command,
      response: response || 'Error',
      user: 'root',
      host: '127.0.0.1'
    }

    this.setState(prevState => ({
      log: [
        ...prevState.log,
        entry
      ]
    }));

    e.target.command.value = null;
  }

  render() {
    return (
      <div className="app">
        <Log log={this.state.log} />
        <UserInput addEntryToLog={this.addEntryToLog} />
      </div>
    )
  }
}

export default App;