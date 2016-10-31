import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import Immutable from 'immutable';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

export default props => {
  // This is how we get initial props Rails into redux.
  // Revision 161029:
  // naming of the state key "helloWorldStore" is kind of misleading as people
  // may think all app states should go inside this wrapper. also this wrapper
  // doesn't solve the issue with Immutable.js. what if we have things like
  // age, email besides name? then we will soon run into trouble when we want
  // to seperate reducers and use combineReducers to produce the Immutable
  // object because the original combineReducers expects plain object
  const initialState = {
    $$person: Immutable.fromJS(props),
  };

  const store = createStore(
    rootReducer, initialState, applyMiddleware(thunkMiddleware)
  );
  // Revision 161029:
  // pass enhancers as the third argument of createStore() instead of using
  // compose(). this looks much cleaner and straightforward.
  // if we don't pass preloadedState to createStore, the state will be
  // initialized with the default values we specified reducers
  // if you do something like
  // const store = createStore(reducer, applyMiddleware(thunkMiddleware));
  // the name will be "John Doe" which I specified in reducer
  // I don't see why should we merge default values we specified in reducers
  // with the state we pass from server

  return store;
};
