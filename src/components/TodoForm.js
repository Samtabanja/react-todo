import React from 'react';

class TodoForm extends React.Component {
  render(){
    return(
      <form className="Form" onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button>Submit</button>
      </form>

    )
  }
}

export default TodoForm;
