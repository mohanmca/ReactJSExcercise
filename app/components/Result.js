var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, "  ")}</pre>;
}

var Prompt = function(props) {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        Results :
        {puke(props)}
      </div>
  )
}

Prompt.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Prompt;
