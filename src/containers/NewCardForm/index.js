import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addCard } from '../../actions/index';


// SMOKE TEST FOR AXIOS: open inspector and look at {}
// axios.get('/api/kanban')
// .then(result => {
//   console.log(result.data)
// })

class NewCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      titleInput: '',
      priorityInput: '',
      createdByInput: '',
      assignedToInput: '',
    }

    this.handleTitle = this.handleTitleChange.bind(this);
    this.handlePriority = this.handlePriorityChange.bind(this);
    this.handleCreatedBy = this.handleCreatedByChange.bind(this);
    this.handleAssignedTo = this.handleAssignedToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleTitleChange(event) {
    this.setState({ titleInput: event.target.value })
  }

  handlePriorityChange(event) {
    this.setState({ priorityInput: event.target.value })
  }

  handleCreatedByChange(event) {
    this.setState({ createdByInput: event.target.value })
  }

  handleAssignedToChange(event) {
    this.setState({ assignedToInput: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

    // const task = this.state.newTask.trim();
    const oneTask = {

      title: this.state.titleInput,
      priority: this.state.priorityInput,
      created_by: this.state.createdByInput,
      assigned_to: this.state.assignedToInput,
    }
    console.log(oneTask)
    
    if(oneTask) {
      this.props.addCard(oneTask)
    }
    this.setState({ oneTask: '' });
    }  
  
  
  render() {
    return (
      <div id="new-task-form">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            id="title-input"
            ref={(input) => { this.textInput = input; }}
            value={this.props.titleInput} 
            onChange={this.handleTitle} 
            placeholder="new task..."
          />
        
          <select
            className="priority-list"
            value={this.props.priorityInput}
            onChange={this.handlePriority}
            placeholder="select priority...">

            <option value="Default">Select Priority... </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input 
            type="text" 
            id="created-by-input"
            ref={(input) => { this.textInput = input; }}
            value={this.props.createdByInput} 
            onChange={this.handleCreatedBy} 
            placeholder="created by..."
          />

          <input 
            type="text" 
            id="assigned-to-input"
            ref={(input) => { this.textInput = input; }}
            value={this.props.assignedToInput} 
            onChange={this.handleAssignedTo} 
            placeholder="assigned to..."
          />
          <button type="submit">Add Task</button>
      </form>
    </div>
    
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (card) => {
      dispatch(addCard(card));
    }
  }
}

const ConnectedNewCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCard)

export default ConnectedNewCard;

//  addCard: card => dispatch(addCard(card))

// loadPlanets: () => {
//   dispatch(loadPlanets());
