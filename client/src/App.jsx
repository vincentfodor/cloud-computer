import React, { Component } from 'react';
import axios from 'axios';

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
            return `HELP     Shows this dialog
FS       File system`
            break;
        case 'fs':
            if(command[1] === '--list' || command[1] === '--l') {
              const response = await axios.get('http://localhost:3001/file-list/')
              let output = '';

              response.data.map(filename => {
                output += filename + '\n';
              });

              return output;
            } else if(command[1] === '--download' || command[1] === '--d') {
              const response = await axios.get('http://localhost:3001/download/' + command[2], {
                responseType: 'blob'
              });

              if(response.data.size === 14 && response.data.type === 'application/json') return false;

              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');

              link.href = url;
              link.setAttribute('download', command[2]);
              document.body.appendChild(link);
              link.click();
              
              return `The download for ${command[2]} is starting...`;
            } else if(command[1] === '--help') {
              return `File System

Usage: fs [--option] [filename]

OPTIONS:

--help      Show this dialog
--download
--d         Download a file from the server
--list
--l         List all existing files on the server`
            } else {
              return false;
            }
            break;
        case 'clear': 
            this.clearLog();
            return `The log has been cleared`
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
          response: response || 'Sorry, something went wrong. Try using --help option',
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