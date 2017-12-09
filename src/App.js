import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import './App.css';

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">ZS</h1>
          </header>
          <p className="App-intro">
          </p>
          <RaisedButton label="Send Gil an Email" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;