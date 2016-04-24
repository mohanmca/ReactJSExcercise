var StarFrame = React.createClass({
    render() {
        return (
            <div id="Game">
            ***
            </div>
        );
    }
});

var ButtonFrame = React.createClass({
    render() {
        return (
            <div id="ButtonFrame">=</div>
        );
    }
});

var AnswerFrame = React.createClass({
    render() {
        return (
            <div id="AnswerFrame"></div>
        );
    }
});

var NumberFrame = React.createClass({
    render() {
        return (
            <div id="NumberFrame">1,2</div>
        );
    }
});

var GameFrame = React.createClass({
    render() {
        return (
        <div id="GameFrame">
            <StarFrame />
            <ButtonFrame />
            <AnswerFrame />
            <NumberFrame />
        </div>            
        );
    }
});

ReactDOM.render(
        <GameFrame />,
        document.getElementById('app')
);
