var React = require("react");
var ReactDOM = require("react-dom");

var USER_DATA = {
  name: "Tyler",
  username: 'tylermcgininis',
  image: "https://avatars0.githubusercontent.com/u/293340?v=3&s=460"
};

var ProfileName = React.createClass({
      render: function(props) {
          return ( <div>{this.props.name}</div> );
      }
});

var ProfilePic = React.createClass({
      render: function(props) {
          return ( <img src={this.props.imageUrl} style={{height: 100, width: 100}} />);
      }
});

var ProfileLink = React.createClass({
      render: function(props) {
          return (
            <a href={'https://www.github.com/' + this.props.username} >
              {this.props.username}
        </a>);
      }
});

var Avatar = React.createClass({
  render: function(props) {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.username} />
      </div>
    );
  }
});

ReactDOM.render( <Avatar user={USER_DATA} anyOtherSortOfData={9} /> ,      document.getElementById('app'));
