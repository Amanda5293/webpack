import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import axios from 'axios';
import Header from './header';
import List from './list';

class App extends Component {
  componentDidMount() {
    axios.get('/react/api/header.json')
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Header} />
          <Route path="/header" component={Header} />
          <Route path="/list" component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
