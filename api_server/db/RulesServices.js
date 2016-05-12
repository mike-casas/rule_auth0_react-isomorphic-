var request= require('request');
var http= require('http');
var data= require('./rules');
var Promise = require('bluebird');
var _ = require('lodash');
var async = require("async");

var _self = {
  all: all,
  findRule: findRule
};

function all(params, callback){
  var params= params;

  var template=[];
   async.each(data, function(value, callback) {
      async.forEachOf(value.templates, function (rule, key, callback) {
              if(rule.id== params){
                template.push({"categoryName": value.name, rule});
              }
        callback();
      }, function (err) {
        if (err) {console.error(err.message);}
        return callback(); // show that no errors happened
      });
  }, function(err,result) {
      if(err) {
          console.log('There was an error' + err);
      } else {
        if(template.length > 0 ){
          var categories=[];
          async.forEachOf(data, function (value, key, callback) {
              async.each(value.templates, function(i){
                async.each(i.categories, function(x){
                  if(x == template[0].categoryName){
                    categories.push(i);
                  }
                });
              });
             return callback();
          }, function (err) {
            if (err) {console.error(err.message);}
              return callback([{template,"categories":categories}]);
          });
        }else{
          return callback([]);
        }
      }
  });
}

var findRule = (id) => {
  return Promise.race(rules.map(category => findRuleInCategory(category, id)));
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
  var categories = ruleTemplate.categories.map(categoryName => _.find(rules, { name: categoryName }));

  return _.assign({}, ruleTemplate, { categories: categories });
};

module.exports= _self;
