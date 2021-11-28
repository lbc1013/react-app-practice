import React, { Component } from 'react';

class Toc extends Component {
  render () {
    const data = this.props.data;
    let lists = [];
    for (let i = 0; i < data.length; i++) {
      lists.push(
      <li key={data[i].id}>
        <a
          href={data[i].text}
          data-id={data[i].id}
          onClick={function (e) {
            e.preventDefault();
            let dataId = Number(e.target.dataset.id);
            this.props.onChangePage(dataId);
          }.bind(this)}>
          {data[i].text}</a>
      </li>);
    }

    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}

export default Toc;