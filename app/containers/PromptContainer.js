var React = require("react")
var transparentBg = require('../styles/index').transparentBg

//var ReactRouter = require('react-router')

var PromptContainer = React.createClass({
	contextTypes:  {
		router: React.PropTypes.object.isRequired
	},
	onUpdateUser(event) {
		event.preventDefault();
		this.setState({username: event.target.value});
	},
	onSubmitUser(event) {
		event.preventDefault();
		var username = this.state.username;
		this.setState({username: ''});
		if (this.props.routeParams.playerOne) {
			this.context.router.push({
						pathname: '/battle',
						query : {
							playerOne: this.props.routeParams.playerOne,
							playerTwo: this.state.username
						}
					});
		} else {
			this.context.router.push('/playerTwo/'+this.state.username);
		}
	},
	getInitialState : function(){
		return {
			username: ''
		}
	},
	 render : function() {
     return (
       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
         <h1>{this.props.route.header}</h1>
         <div className="col-sm-12">
           <form onSubmit={this.onSubmitUser}>
             <div className="form-group">
               <input className="form-control" placeholder="Github username"
								 value={this.state.username}
								 type="text" onChange={this.onUpdateUser}/>
             </div>
             <div className="form-group col-sm-4 col-sm-offset-4">
               <button className="btn btn-block btn-succcess" type="Submit" >
                  Continue
               </button>
             </div>
           </form>
       </div>
     </div>
     );
   }
})

module.exports = PromptContainer;
