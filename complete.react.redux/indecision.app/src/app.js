var app = {
  title: 'Indecision',
  subtitle: 'Choose your destiny...'
}

var template = (
  <div>
    <h1 id="andrei">{app.title}</h1>
    <p>{app.subtitle}</p>

    <p>This is some other info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </div>
);

var user = {
  name: 'Andrei',
  age: 36,
  location: 'Bucharest'
};

var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
