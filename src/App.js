import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './containers/home-container.js';
import QuoteContainer from './containers/quote-container.js';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='quote' component={QuoteContainer} />
      </Router>
    );
  }
}

export default App;
