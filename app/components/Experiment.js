var React = require('react');
var transparentBg = require('../styles/index').transparentBg

var Main = React.createClass({
  render: function() {
    return (
      <div>Main {this.props.children}</div>
    )
  }
});

module.exports = Main;
