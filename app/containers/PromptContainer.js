var React = require('react')
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
	contextTypes:  {
		router: React.PropTypes.object.isRequired
	},
	handleUpdateUser(event) {
		event.preventDefault();
		this.setState({username: event.target.value});
	},
	handleSubmitUser: function(event) {
		event.preventDefault();
		var username = this.state.username;
		this.setState({username: ''});
		console.log(this);
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
	getInitialState : function() {
		return {
			username: ''
		}
	},
	 render : function() {
     return (
    		<Prompt
					onSubmitUser={this.handleSubmitUser}
					onUpdateUser={this.handleUpdateUser}
					header={this.props.route.header}
					username={this.state.username}
					/>
     );
   }
})

module.exports = PromptContainer;
