import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { editCard, deleteCard } from '../../actions/index';

class SmartCard extends Component {
  constructor (props) {
    super (props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      priority: this.props.priority,
      status: this.props.status,
      createdBy: this.props.created_by
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDeleteChange.binds(this);
    this.handleEdit = this.handleEditButton.binds(this);
  }

  handleChange(event) {
    this.setState({ [event.target.value]: event.target.value });
  }

  handleDelete(event) {
    this.props.deleteCard(event.target.id)
  }

  handleEdit(event) {
    this.props.editCard(event.target.id)
  }
}

