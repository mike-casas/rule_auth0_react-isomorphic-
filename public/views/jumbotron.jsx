var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='jumbotron'>
      <div  className="circle-logo" data-name={this.props.logo}>
      <div className="logo"></div>
      </div>
      <h1>{this.props.title}</h1>
      <p>{this.props.summary}</p>
      <div className="btn btn-success btn-lg">Try auth0 for free</div>
      </section>
      );
  }
});
