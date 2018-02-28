import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

// import logo from './logo.svg';
import './index.css';
import Header from '../src/components/Header';
import Column from '../src/components/Column';
import NewCard from '../src/containers/NewCardForm';
// import Card from '../src/components/Card';
// import Board from '../src/containers/Board/index';
import {loadCards} from './actions/index';
import reducers from './reducers';




//SMOKE TEST FOR AXIOS: open inspector and look at {}
// axios.get('/api/kanban')

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
    // console.log('this.props', this.props)
  }

  componentWillMount() {
    this.props.loadCards()

  }

  render() {
    // console.log('thispropscards', this.props.cards)
    return (
      <div className="main">
        <Header name="KanBan"/> 
        {/* <Board /> */}
        <NewCard />
      <div className="column-container">
        
        <Column cards={this.props.cards} columnName="queue"/>
        <Column cards={this.props.cards} columnName="in_progress"/>
        <Column cards={this.props.cards} columnName="done"/>


      </div>

      </div>
    )
  }
}
//<Card cards={this.props.cards[0]}/>
 

const mapStateToProps = state => { //goes to the reducer
  return {
    cards: state.cardReducer.cards // calls reducer inital state
  }
}

const mapDispatchToProps = dispatch => { //second argument is getState
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
