# ReactJSExcercise

This idea is so important in React that React 0.14 introduced Stateless Functional Components

npm cache clean
npm start
npm install --save axios


FIRST - UI rules
~~~~~~~
Focused
Independent
Reusable
Small
Testable

React.js
~~~~~~~~
F(D) => V
Function that takes data, and produces View


React Router Course
~~~~~~~~~~~~~~~~~~~~
https://github.com/reactjs/react-router-tutorial/tree/master/lessons


Warren resources
~~~~~~~~~~~~~~~~
https://github.com/wmira/functional-javascript-resources


*   Separating components into container components and presentational components, with presentational components optionally taking in some data and rendering a view.
*   Stateless Functional Components are that they don't support shouldComponentUpdate
*   PropTypes in React are the middle ground in terms of type checking properties that are passed to your components.- https://facebook.github.io/react/docs/reusable-components.html
*   PropTypes are great for finding bugs in your components
*   


PropTypes
var Icon = React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    optionalArray: PropTypes.array.isRequired,
    optionalBool: PropTypes.bool.isRequired,
    optionalFunc: PropTypes.func.isRequired,    
    style: PropTypes.object
  },
  render: ...
});

React's Life Cycle Methods can be broken down into two categories.
  1) When a component gets mounted to the DOM (componentDidMount) and unmounted (componentWillUnmount).
  2) When a component receives new data.

Items that may be important to do when a component mounts or unmounts.
* Establish some default props in our component
* Set some initial state in our component
* Make an Ajax request to fetch some data needed for this component
* Set up any listeners (ie Websockets or Firebase listeners)
* Remove any listeners you initially set up (when unmounted)


https://gist.github.com/fay-jai/fc8a5093c0b5124d4b2d#file-react-lifecycle-parent-child-jsx


var FriendsList = React.createClass({
  componentDidMount: function () {
    return Axios.get(this.props.url).then(this.props.callback)
  },
  render: function () {
    ...
  }
})
