var axios = require('axios');

var github = {
  id : 'mohanmca',
  password : 'manan26',
  param : '?client_id=' + this.id + '&client_secret=' + this.password
}

function getUserInfo(username) {
  return axios.get('http://api.github.com/users/'+ github.username + github.param);
}

function getRepos(username) {
  return axios.get('http://api.github.com/users/'+ github.username + '/repos' + github.param + "&per_page=100");
}

function getTotalStars(username) {
  return repos.data.reduce( (prev, curr) => prev + current.stargazers_count)
}

function getPlayersData(player) {
  getRepos(player.login)
  .then(getTotalStars)
  .then(function(totalStars) {
       return {
        followers: player.followers,
        totalStars: totalStars
      }}
    )
}

function calculateScores(players) {
  return [
    player[0].followers * 3 +   player[0].totalStars * 3,
    player[1].followers * 3 +   player[1].totalStars * 3
  ]
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(
        username => getUserInfo(username)
      )).then(info => info.map(user => user.data))
      .catch(err => console.warn('Error in getPlayersInfo', err))

  },
  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    Axios
    .all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(err => console.warn('Error in getPlayersInfo', err))
  }

}

module.exports = helpers;
