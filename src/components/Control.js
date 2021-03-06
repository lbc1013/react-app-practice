import React, { Component } from 'react';

class Control extends Component {
  render () {
    return (
      <ul>
        <li><a href='/create' onClick={function (event) {
          event.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>Create</a></li>
        <li><a href='/update' onClick={function (event) {
          event.preventDefault();
          this.props.onChangeMode('update');
          console.log(event);
        }.bind(this)}>Update</a></li>
        <li><input type='button' value='Delete' onClick={function (event) {
          event.preventDefault();
          this.props.onChangeMode('delete');
        }.bind(this)}></input></li>
      </ul>
    )
  }
}

export default Control;
