'use strict';

var app = {
  title: 'Indecision',
  subtitle: 'Choose your destiny...',
  options: ['One', 'Two']
};

var appHeader = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    { id: 'title' },
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options && app.options.length > 0 ? React.createElement(
    'p',
    null,
    'Here are your options: ',
    app.options.join(', ')
  ) : React.createElement(
    'p',
    null,
    'No options'
  )
);

var user = {
  name: 'Andrei',
  age: 36,
  location: 'Bucharest'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var template = React.createElement(
  'div',
  null,
  appHeader,
  React.createElement(
    'h1',
    null,
    (user.name ? user.name : 'John Doe').toUpperCase() + '!'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
