var React = require("react");
var ReactDOM = require("react-dom");

var mixinDefaultProps = {
    getDefaultProps: function () {
        console.log("mixins getDefault");
        return { displayName: 'component' }
    }
}

var APP = React.createClass({
    mixins: [mixinDefaultProps],
    getDefaultProps: function () {
        console.log("myself getDefault");
        return { muself: 'component' }
    },
    render: function () {
        return <div>{this.props.displayName}</div>
    }
});

ReactDOM.render(<APP/>, document.getElementById("root"))

//ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));