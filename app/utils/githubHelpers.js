var axios = require('axios');

var github = {
  id : 'mohanmca',
  password : 'murali26',
  param : '?client_id=' + this.id + '&client_secret=' + this.password
}

function getUserInfo(username) {
  return axios.get('http://api.github.com/users/'+ github.username + github.param);
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(
        username => getUserInfo(username)
      )).then(info => info.map(user => user.data))
      .catch(err => console.warn('Error in getPlayersInfo', err));
  },

}

module.exports = helpers;
