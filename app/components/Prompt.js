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
              <button className="btn btn-lg btn-success" type="submit" >
                 Continue
              </button>
            </div>
          </form>
      </div>
    </MainContainer>
  );
}

Prompt.propTypes = {
  onSubmitUser : PropTypes.func.isRequired,
  onUpdateUser : PropTypes.func.isRequired,
  header : PropTypes.string.isRequired,
  username : PropTypes.string.isRequired
}

module.exports = Prompt;
