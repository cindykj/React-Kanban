import React from 'react';

const Card = ( {title, priority, created_by, assigned_to} ) => {
  // console.log('component card', cards)
  return(
    <div className="card-component">
    <div className="card-title">
      { title }
    </div>
    <div className="card-details">
      Priority: { priority }
      <br />
      Assigned by: { created_by }
    </div>

    <div className="card-bottom">
      <button className="edit-button">
        Edit
      </button>
      <button className="delete-button">
        Delete
      </button>
      <div className="assigned-to">
        { assigned_to }
      </div>
    </div>
  </div>
  )
}


export default Card;

// const Card = ( {cards={}} ) => {
