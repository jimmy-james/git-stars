import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Header from './components/shared/Header/index';
import HomePage from './containers/HomePage/index';
import CommitsPage from './containers/CommitsPage/index';

import 'babel-polyfill';

import './index.css';

const HeaderWithRouter = withRouter(Header);

const App = () =>
  <div>
    <Router>
      <HeaderWithRouter />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/commits/:owner/:repo' component={CommitsPage} />
      </Switch>
    </Router>
  </div>;

ReactDOM.render(<App />, document.getElementById('root'));
