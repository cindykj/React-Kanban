import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card';


// class App extends Component { //class makes any instance
//   constructor() {
//     super();
//     this.state = { //this. refers to instance
//       bookList : [],
//       findBook: '',
//     }
//   }
class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: '',
    }
  }

  componentWillMount() {
    this.props.something()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Card />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;
