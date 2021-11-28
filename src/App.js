import React, { Component } from 'react';
import Subject from './components/Subject';
import Toc from './components/Toc';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Welcome',
      selected_id: 0,
      welcome: {title: 'Welcome!', desc: 'This is React practice'},
      subject: {title: 'WEB', subTitle: 'World Wide Web!'},
      toc: [
        {id: 1, text: 'HTML', content:'HTML is HyperText Markup Lanuage.'},
        {id: 2, text: 'CSS', content: 'CSS is Cascading Style Sheets'},
        {id: 3, text: 'JAVAS CRIPT', content:'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.'}
      ]
    }
  }

  changeMode () {
    let _title, _desc, _article = null;
    if (this.state.mode=== 'Welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      for (let i = 0; i < this.state.toc.length; i++) {
        let data = this.state.toc[i];
          if (data.id === this.state.selected_id) {
            _title = data.text;
            _desc = data.content;
            break;
          }
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        let tocLength = this.state.toc.length;
        let newToc = this.state.toc.concat(
          {id: tocLength, text: _title, content: _desc});
        this.setState({
          toc: newToc
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      _article = <UpdateContent data={this.state.toc} onSubmit={function (_title, _desc) {
        console.log(_title, _desc);
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() {
    return (
    <div className="App">
      <Subject
        title={this.state.subject.title}
        subTitle={this.state.subject.subTitle}
        onChangePage={function () {
          this.setState({mode: 'Welcome'});
        }.bind(this)}
      ></Subject>
      <Toc
      onChangePage={function (id) {
        this.setState({
          mode: 'read',
          selected_id: id
          });
      }.bind(this)}
      data={this.state.toc}
      ></Toc>
      <Control onChangeMode={function (_mode) {
        if (_mode === "delete") {
          let tocArr = Array.from(this.state.toc);
          for (let i = 0; i < tocArr.length; i++) {
            if (this.state.selected_id === this.state.toc[i].id) {
              tocArr.splice(i,1);
              this.setState({
                toc: tocArr
              })
            }
          }
        } else {
          this.setState({mode: _mode});
        }
      }.bind(this)}></Control>
      {this.changeMode()}
    </div>
    );
  }
}

export default App;
