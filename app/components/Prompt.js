var React = require('react');
var PropTypes = React.PropTypes;
var MainContainer = require('./MainContainer')

var Prompt = function(props) {
    return (
      <MainContainer>
        <h1>{props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input className="form-control" placeholder="Github username"
                value={props.username}
                type="text" onChange={props.onUpdateUser}/>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-succcess" type="Submit" >
                 Continue
              </button>
            </div>
          </form>
      </div>
    </MainContainer>
  );
}

Prompt.propTypes = {
  header : PropTypes.string.isRequired,
  onSubmitUser : PropTypes.func.isRequired,
  username : PropTypes.string.isRequired,
  onUpdateUser : PropTypes.func.isRequired
}

module.exports = Prompt;
