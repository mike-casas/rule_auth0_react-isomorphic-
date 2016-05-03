var express= require('express');
var router= express.Router();
var async = require("async");
var RulesServices = require('./db/RulesServices');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/rule/:ruleId', function(req, res) {
   RulesServices.all(req.params.ruleId, function(data){
      if (data.length === 0){
        sendJSONresponse(res,404, {"message":"Not Found"});
      }else{
        sendJSONresponse(res,200, data);
      }
   });
});

module.exports= router;
