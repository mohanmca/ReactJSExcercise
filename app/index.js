var React = require("react");
var ReactDOM = require("react-dom");

var USER_DATA = {
  name: "Tyler",
  username: 'tylermcgininis',
  image: "https://avatars3.githubusercontent.com/u/71809?v=3&s=460"
};

var ProfilePic = function(props) {
                  return ( <img src={props.imageUrl} style={{height: 100, width: 100}} />);
                }


var ProfileLink = function(props) {
                      return (
                        <a href={'https://www.github.com/' + props.username} >
                          {props.username}
                        </a>
                      );
                    }

var Avatar = function(props) {
  return (
      <div>
        <ProfilePic imageUrl={props.user.image} />
        <ProfileLink username={props.username} />
      </div>
    );
  }

ReactDOM.render( <Avatar user={USER_DATA} anyOtherSortOfData={9} /> ,  document.getElementById('app'));
