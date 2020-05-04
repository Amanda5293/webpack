import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import axios from 'axios';

class Header extends Component {
  render() {
    return <h3>Header 3</h3>
  }
}

class List extends Component {
  render() {
    return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  }
}

class App extends Component {

  componentDidMount() {
    axios.get('/react/api/header.json')
      .then((res) => {
        console.log(res);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/header'  component={Header} />
          <Route path='/list' component={List} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
