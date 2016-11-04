// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
const HelloWorldWidget = (props) => {
  const { name, updateName } = props;

  return (
    <div className="container">
      <h3>
        Hello, {name}!
      </h3>
      <hr />
      <form className="form-horizontal">
        <label htmlFor="name">
          Say hello to:
        </label>
        <input
          type="text" value={name} id="name"
          onChange={(e) => updateName(e.target.value)}
        />
      </form>
    </div>
  );
};

HelloWorldWidget.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  updateName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default HelloWorldWidget;
