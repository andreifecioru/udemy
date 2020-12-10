import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const textColor = 'white';
  const buttonText = 'Save';

  return (
    <div>
      <label 
        // 'for' is a JS keyword: we use 'htmlFor' instead
        htmlFor="name"
      > 
        Enter name:
      </label>
      <input id="name"/>
      <br />
      <button
        // since class is a reserved JS keywors, the 'class' attribute is renamed to 'className'
        className="save-btn"
        // inline CSS styling in JSX (we pass in a JS object)
        style={{ 
          backgroundColor: 'blue',
          color: textColor // referencing JS variables.
        }}
      >
        { buttonText /* inject JS code in JSX*/ }
      </button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);