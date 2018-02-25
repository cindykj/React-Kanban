import React from 'react';

const Header = ({ name }) => {

  return (
  <div className="header-bar">
    <h1>{ name }</h1>
    <a href="new-task">
      <button className="add">
        + New Task
      </button>
    </a>
  </div>
  )
}

export default Header;