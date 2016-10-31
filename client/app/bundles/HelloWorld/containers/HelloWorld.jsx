import React, { PropTypes } from 'react';
import HelloWorldWidget from '../components/HelloWorldWidget';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import * as actions from '../actions/helloWorldActionCreators';

function mapStateToProps(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  const { otherState, ...selectedStates } = state;
  // Revision 161029:
  // specify states to exclude instead of states to include
  return selectedStates;
}

// Simple example of a React "smart" component
const HelloWorld = (props) => {
  const { $$person, updateName } = props;
  // Revision 161029:
  // Shouldn't use bindActionCreators like this. Because with this
  // each time this HelloWorld component needs to be rendered
  // bindActionCreators is called, returning a set of functions with the same
  // code but different refenrences. So this will result in unexpected results
  // of shouldComponentUpdate when people later use PureComponent or
  // PureRenderMixin. When they expect the component not to update, it updates
  // because those dispatch functions passed from here are with diffrent
  // references. BTW, we can just pass a plain object of actions as the second
  // argument of connect(), connect() will bind for you

  const name = $$person.get('name');

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
  return (
    <HelloWorldWidget {...{ updateName, name }} />
  );
};

HelloWorld.propTypes = {
  // Revision 161029:
  // as actions are passed as the second argument of connect(), connect() will
  // bind actions for us and won't pass dispatch to props. also we shouldn't // need dispatch anyway as actions are already bound

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$person: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
// if you don't want to pass all the actions, do something like:
// const {updateName, ...selectedActions} = actions;
// export default connect(select, selectedActions)(HelloWorld);
export default connect(mapStateToProps, actions)(HelloWorld);
