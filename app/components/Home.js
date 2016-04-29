var React = require('react');
var MainContainer = require('./MainContainer')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
          <h1>Github Battle</h1>
          <p className='lead'>Some fancy Motto</p>
          <Link to='playerOne'>
            <button type='button' className='btn btn-lg btn-succcess'>
              Get Started
            </button>
          </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
