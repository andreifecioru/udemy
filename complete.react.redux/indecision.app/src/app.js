var template = (
  <div>
    <h1 id="andrei">Andrei is really, trully the best!</h1>
    <p>This is some info</p>
    <p>This is some other info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Andrei Fecioru</h1>
    <p>Age: 36</p>
    <p>Location: Bucharest</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
