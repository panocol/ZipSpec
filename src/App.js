import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import './App.css';

class App extends Component {

  onClick() {
    axios.post('https://formspree.io/patrickncollins@gmail.com', {
      testName: 'test value',
    }).then((response) => {
      // dispatch({type: "SAVE_USERS_SUCCESS", payload: response.data});
      console.log('email sent', response)
    }).catch((err) => {
      // dispatch({type: "SAVE_USERS_ERROR", payload: err});
      console.log('error on email send', err)
    })
  }

  render() {
    return (

      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">ZS</h1>
          </header>
          <p className="App-intro">
          </p>
          <form>

            <RaisedButton onClick={() => this.onClick()} label="Send Gil an Email"/>
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;