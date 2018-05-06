'use strict';

var app = {
  title: 'Indecision',
  subtitle: 'Choose your destiny...'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    { id: 'andrei' },
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    'This is some other info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    ),
    React.createElement(
      'li',
      null,
      'Item 3'
    )
  )
);

var user = {
  name: 'Andrei',
  age: 36,
  location: 'Bucharest'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase() + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
