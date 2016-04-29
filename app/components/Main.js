var React = require('react');
var transparentBg = require('../styles/index').transparentBg
var ReactCSSTranisitionGroup = require('react-addons-css-transition-group');
require('../main.css')

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <ReactCSSTranisitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          >
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTranisitionGroup>
      </div>
    )
  }
});

module.exports = Main;
