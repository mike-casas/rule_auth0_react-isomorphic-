import React from 'react'

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
                <p >{rule.title}</p>
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

