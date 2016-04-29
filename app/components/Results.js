var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var MainContainer = require('./MainContainer')
var Loading = require('./Loading')
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

// function puke(obj) {
//   return <pre>{JSON.stringify(obj, null, "  ")}</pre>;
// }

function StartOver(props) {
  return (
      <div className={col-sm-12} style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
          </Link>
      </div>
  )
}

var Results = function(props) {
  if(props.isLoading) {
    return (
          <MainContainer>
            <Loading text='One Moment' />
        </MainContainer>
    )
  }

  if(props.scores[0] == props.scores[1]) {
      return (
          <MainContainer>
            <h1>It's a tie</h1>
            <StartOver />
          </MainContainer>
      )
    }


  var winningIndex = props.scores[0]  >  props.scores[1]  ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1  : 0 ;
    return (
      <MainContainer>
          <h1>Results</h1>
          <div className="col-sm-8 col-sm-offset-2">
            <UserDetailsWrapper header='Winner'>
              <UserDetails  info={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header='Looser'>
              <UserDetails info={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
            </UserDetailsWrapper>
          </div>
          <StartOver />
      </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
