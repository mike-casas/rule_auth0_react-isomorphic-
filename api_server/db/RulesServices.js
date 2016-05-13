var request= require('request');
var http= require('http');
var data= require('./rules');
var Promise = require('bluebird');
var _ = require('lodash');
var async = require("async");

var _self = {};


// sin bluebird
/*_self.findRule = (id) => {
  return Promise.all(data.map(category => findRuleInCategory(category, id)))
    .then(result => result.filter(element => !!element))
    .then(result => result[0]);
};*/

_self.findRule = (id) => {
  return Promise.all(data.map(category => findRuleInCategory(category, id)))
    .filter(element => !!element)
    .then(result => result[0]);
};

var findRuleInCategory = (category, id) => {
  return new Promise((resolve, reject) => {
    category.templates.forEach(template => {
      if (template.id === id) {
        resolve(addCategoriesToRule(template));
      }
    });
    resolve();
  });
};

var addCategoriesToRule = (ruleTemplate) => {
  var categories = ruleTemplate.categories.map(categoryName => _.find(data, { name: categoryName }));
  return _.assign({}, ruleTemplate, { all_categories: categories });
};

module.exports= _self;
