console.log('App.js is running!');

// var template = <h1 id="andrei">Andrei is the best!</h1>
var template = React.createElement(
    'h1',
    { 'id': 'andrei'},
    'Andrei is the best!'
)
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);