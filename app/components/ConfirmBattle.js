var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var UserDetails = require('../components/UserDetails');
var PropTypes = React.PropTypes
var styles = require('../styles/index')
var Link = require('react-router').Link
var Loading = require('./Loading')


function puke(obj) {
  return <pre>{JSON.stringify(obj, null, "  ")}</pre>;
}

var ConfirimBattle =  function(props) {
    return props.isLoading === true
      ? <Loading speed={800} text='Waiting'/>
    :  <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button'
                className='btn btn-lg btn-success'
                onClick={props.onInitiateBattle} >Initiate Battle!
              </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>
}

ConfirimBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onIntitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirimBattle;
