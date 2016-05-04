'use strict';

var Layout = require('./layout.jsx');
var React = require('react');

module.exports = React.createClass({

  render: function render() {

    return (
      <Layout {...this.props}>
        <div className="container">
        <h3 className="text-center">URL: {this.props.url} - Not Found(404)</h3>
        </div>
      </Layout>
    );
  }
});
