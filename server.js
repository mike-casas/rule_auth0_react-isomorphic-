/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2016 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

const PORT = 3000;

import {join} from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import ReactEngine from 'react-engine';
import routes from './public/routes.jsx';
var async = require("async");

require('es6-promise').polyfill();
require('isomorphic-fetch');


let app = express();
let api = require('./api_server/api');
// create the view engine with `react-engine`
let engine = ReactEngine.server.create({
  routes: routes,
  routesFilePath: join(__dirname, '/public/routes.jsx'),
  performanceCollector: function(stats) {
    console.log(stats);
  }
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', join(__dirname, '/public/views'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', ReactEngine.expressView);

// expose public folder as static assets
app.use(express.static(join(__dirname, '/public')));

app.use(favicon(join(__dirname, '/public/favicon.ico')));

// add our app routes
app.use('/api', api);

app.get('/rules/:ruleId', function(req, res) {
  fetch('http://localhost:3000/api/rule/'+ req.params.ruleId)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(stories) {
      var categories=[];
      var counter=0;
      let rule = stories[0].template[0].rule;
      async.map(stories[0].categories, function(rule, callback){
          if(counter < 4 ){
            categories.push(rule);
            counter ++;
          }
          callback();
      }, function(err,result){
          res.render(req.url, {
            categories:categories,
            title: rule.title,
            summary: rule.summary,
            logo: rule.logo || 'vanillajs',
            description: rule.description,
            code: rule.code
          });
      });
    });
});

app.get('/rules', function(req, res) {


      res.render(req.url, {
       title:"Rules",
       logo: "vanillajs"
      });



});

// 404 template
app.use(function(req, res) {
  res.render('404', {
    title: 'Pagina not Found',
    url: req.url,
    logo: "data-name"
  });
});

const server = app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
