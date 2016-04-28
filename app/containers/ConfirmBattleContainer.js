var React = require('react');
var ConfirmBattle = require("../components/ConfirmBattle")
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathName: 'results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(
      players => this.setState(
        {
          isLoading: false,
          playersInfo: [players[0], players[1]]
        }
      )
    )
    //get info from git hub
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onIntitiateBattle={this.handleInitiateBattle}
        />
    )
  }
});

module.exports = ConfirmBattleContainer;
