import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './containers/main-container.js';
import GetQuote from './components/getquote.js';
import QuoteContainer from './containers/quote-container.js';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ Main } >
          <Route path='quote' component={ QuoteContainer } />
          <IndexRoute component={ GetQuote } />
        </Route>
      </Router>
    );
  }
}

export default App;
