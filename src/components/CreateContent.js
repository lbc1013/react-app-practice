import React, { Component } from 'react';

class CreateContent extends Component {
  render () {
    return (
      <article>
        <h2>Create</h2>
        <form
        action="/create_process"
        method="post"
        onSubmit={function (event) {
          event.preventDefault();
          this.props.onSubmit(
            event.target[0].value,
            event.target[1].value
          );
        }.bind(this)}>
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p><textarea type="text" name="description" placeholder="description"></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    )
  }
}

export default CreateContent;
