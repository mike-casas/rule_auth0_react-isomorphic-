import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Jumbotron from './jumbotron.jsx'
var Router = require('react-router');

module.exports = React.createClass({
    render: function render() {
      return (
        <html>
          <head>
            <meta charSet='utf-8' />
            <title>React Engine Example App</title>
            <link rel='stylesheet' href='/styles.css'></link>
          </head>
          <body>
              <Header />
              <Jumbotron logo= {this.props.logo} title={this.props.title} summary= {this.props.summary} />
                {this.props.children}
              <Footer/>
            <script src='/bundle.js'></script>
          </body>
        </html>
      );
    }
  });
