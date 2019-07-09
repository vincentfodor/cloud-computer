import React, { Component } from 'react';

import './App.css';

import Log from './components/Log';
import UserInput from './components/UserInput';

class App extends Component {
  state = {
    log: []
  }

  commandListener = async command => {
    command = command.split(' ');

    console.log(command[0]);

    switch(command[0]) {
        case 'help':
            return `HELP     Shows this dialog`
            break;
        case 'download':
            
            break;
        case 'clear': 
            this.clearLog();
        default: 
            return 'The given command does not exist'
    }
  }

  clearLog = () => {
    this.setState({
      log: []
    })
  }

  addEntryToLog = e => {
    e.preventDefault();

    const command = e.target.command.value;
    let entry;

    this.commandListener(command)
      .then((response) => {
        entry = {
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
      })
      .catch(error => console.log(error));

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