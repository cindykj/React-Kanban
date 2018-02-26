import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './index.css';
import Header from '../src/components/Header';
import Column from '../src/components/Column';
import Card from '../src/components/Card';
import {loadCards} from './actions/index';
import reducers from './reducers';

//open inspector and look at {}
// axios.get('/api/kanban')
// .then(result => {
//   console.log(result.data)
// })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      priority: '',
      status: '',
      createdBy: '',
      assignedTo: '',
    }
    console.log(this.props)
  }

  componentWillMount() {
    this.props.loadCards()

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Header name="KanBan"/> 
        <Column />
        <Card />
        


      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cardReducer.cards // calls reducer inital state
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    loadCards: () => { //set to props above
      dispatch(loadCards()) //calling from action
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
