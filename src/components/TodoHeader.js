import React, { Component } from 'react';

export default class TodoHeader extends React.Component {
  render(){
    return (
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
    )
  }
}
