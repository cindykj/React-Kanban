import React from 'react';

const Card = ({ cards }) => 
  <div className="card-component">
    <div className="card-title">
      { cards.title }
    </div>
    <div className="card-details">
      Priority: { cards.priority }
      <br />
      Assigned by: { cards.createdBy }
    </div>

    <div className="card-bottom">
      
      <button className="edit-button">
        Edit
      </button>
      <div className="assigned-to">
        {cards.assignedTo}
      </div>
    </div>
  </div>;

export default Card;
