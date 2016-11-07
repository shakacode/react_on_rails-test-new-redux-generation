import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HelloWorldWidget from '../components/HelloWorldWidget';
import * as actions from '../actions/helloWorldActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ name: state.name });

// Simple example of a React "smart" component
const HelloWorld = (props) => {
  const { name, updateName } = props;

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <HelloWorldWidget name={name} updateName={updateName} />
  return <HelloWorldWidget {...{ name, updateName }} />;
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(HelloWorld);
