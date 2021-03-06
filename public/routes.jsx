
'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Redirect, RouterContext } from 'react-router';
import Layout from './views/layout.jsx';
import ListPage from './views/list.jsx';
import Default from './views/Default.jsx';

var routes = module.exports = (
  <Router history={hashHistory} >
      <Route path="/rules" component={Layout}>
        <IndexRoute component={Default} />
        <Route path="/rules/:ruleId" component={ListPage} />
      </Route>
   </Router>
);
