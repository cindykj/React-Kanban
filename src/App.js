import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import Header from '../src/components/Header';
import Column from '../src/components/Column';
import Card from '../src/components/Card';

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

  // componentWillMount() {
  //   this.props.loadCards()
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Header name="KanBan"/> 
        <Column />




          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;

// <BookList books={this.state.bookList} findBook={this.state.findBook} />
