import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from '../../components/Column';
import Card from '../../components/Card';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: []
    }
  }
  render () {
    console.log('boardProps', this.props)
    return (
      // <div className="column-container"> 
        {/* <Column cards={ cards } columnName="Queue" />
        <Column cards={ cards } columnName="In Progress" />
        <Column cards={ cards } columnName="Done" /> */}
      {/* </div> */}
    )
  }
}

const mapStateToProps = state => {
  // console.log('BoardmapStateToProps', this.state)
  return {

  }
}

const ConnectedBoard = connect(
  // mapStateToProps
)(Board)


export default ConnectedBoard;
