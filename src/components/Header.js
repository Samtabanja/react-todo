import React from 'react';

const Header = () => {
  return (
    <div className="appHeader">
       <div className="headerText">
          <h1><span className="blue">React</span> Todo List</h1>
          <p>Click on task to toggle complete</p>
       </div>
    </div>
  );
}

export default Header;
