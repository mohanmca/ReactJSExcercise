var React = require("react")
var ReactDOM = require("react-dom")

var HelloWorld = React.createClass({
      render: function() {
          return ( <div><b><i>"React-HelloWorld!"</i></b></div>);
      }
});

ReactDOM.render( <HelloWorld /> ,
      document.getElementById('app')
);
