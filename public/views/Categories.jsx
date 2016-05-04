import React from 'react'
var Router = require('react-router');

module.exports = React.createClass({
  render: function render() {
    return (
      <section className="border-top">
        <div className="container">
          <h3 className="text-center">You Might Also be Interested in the Following Rules</h3>
          <div className="row">
              {this.props.categories.map(function(rule,i){
                return (
            <div key={i} className="col-md-3">
              <div  className="bg-color-gray-light text-center rule-category" >
                <Router.Link to={'/rules/' + rule.id}>
                  <p >{rule.title}</p>
                </Router.Link>
              </div>
            </div>
              );
              })}
          </div>
        </div>
      </section>
    );
  }
});

