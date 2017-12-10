import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import TextField from 'material-ui/TextField'

import './App.css';
import 'typeface-roboto'

class App extends Component {

  constructor() {
    super()

    this.state = {
      testTextField1: '',
      testTextField2: ''
    }
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    axios.post('https://formspree.io/patrickncollins@gmail.com',
      this.state
    ).then((response) => {
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

          <form onSubmit={this.onSubmit}>

            <TextField
              floatingLabelText="testTextField1"
              name="testTextField1"
              margin="normal"
              value={this.state.testTextField1}
              defaultValue="testValue1"
              onChange={this.onChange}
            />

            <TextField
              floatingLabelText="testTextField2"
              name="testTextField2"
              margin="normal"
              value={this.state.testTextField2}
              defaultValue="testValue2"
              onChange={this.onChange}
            />

            <RaisedButton
              type="submit"
              label="Send Form"
            />
          </form>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;