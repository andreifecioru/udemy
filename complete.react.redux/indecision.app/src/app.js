var app = {
  title: 'Indecision',
  subtitle: 'Choose your destiny...',
  options: ['One', 'Two']
}

var appHeader = (
  <div>
    <h1 id="title">{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) 
      ? <p>Here are your options: {app.options.join(', ')}</p>
      : <p>No options</p> }
  </div>
);

var user = {
  name: 'Andrei',
  age: 36,
  location: 'Bucharest'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var template = (
  <div>
    {appHeader}
    <h1>{(user.name ? user.name : 'John Doe').toUpperCase() + '!'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
