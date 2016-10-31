import { combineReducers } from 'redux-immutable';
import actionTypes from '../constants/helloWorldConstants';

// Revision 161029:
// the helloWorldstore wrapper doesn't solve the issue with Immutable.js.
// what if we have things like age, email besides name? although in this
// simple example app it's OK to deal with an Immutable object with
// only one reducer but people will soon run into trouble when we want
// to seperate reducers and use combineReducers to produce the Immutable
// object because the original combineReducers expects plain object
// I think it's better to integrate redux-immutable otherwise they will be
// stuck on this

function name(state = "John Doe", action) {
  const { type, name } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return name;
    default:
      return state;
  }
}

export default combineReducers({name: name})
