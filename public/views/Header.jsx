import React from 'react'
module.exports = React.createClass({
    render: function render() {
      return (
        <header className="site-header">
          <nav role="navigation" className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button type="button" data-toggle="collapse" data-target="#navbar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                <h1 className="navbar-brand"><a href="/"><span>Auth0</span></a></h1><a href="/jobs" className="no-basic hiring animated bounce hidden-sm hidden-xs hidden-md">We're hiring!</a>
              </div>
              <div id="navbar-collapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left no-basic">
                  <li className="li-why"><a href="/why-auth0">Why Auth0</a></li>
                  <li className="li-how"><a href="/how-it-works">How It Works</a></li>
                  <li className="li-pricing"><a href="/pricing">Pricing</a></li>
                  <li className="dropdown"><span role="button" data-toggle="dropdown" className="btn-dro">More<i className="icon-budicon-460"></i></span>
                    <ul role="menu" aria-labelledby="dLabel" className="dropdown-menu">
                      <li><a href="/lock">Lock</a></li>
                      <li><a href="/passwordless">Passwordless</a></li>
                      <li><a href="/wordpress">WordPress</a></li>
                      <li className="divider"></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/customers">Customers</a></li>
                      <li><a href="/resources">Resources</a></li>
                      <li><a href="/video-tutorials">Video Tutorials</a></li>
                      <li><a href="/partners">Partners</a></li>
                      <li><a href="/opensource">Open Source</a></li>
                      <li><a href="/jobs">Jobs</a></li>
                      <li><a href="/press">Press</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="li-docs no-basic"><a href="/support">Help &amp; Support</a></li>
                  <li className="li-docs no-basic"><a href="/docs">Documentation</a></li>
                  <li><a href="https://manage.auth0.com" className="signin-button login">Open Dashboard</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
  });
