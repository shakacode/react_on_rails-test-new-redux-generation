import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import Immutable from 'immutable';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

const configureStore = railsProps => {
  // This is how we get initial props Rails into redux.
  const initialState = {
    $$person: Immutable.fromJS(railsProps),
  };

  const store = createStore(
    rootReducer, initialState, applyMiddleware(thunkMiddleware)
  );

  return store;
};

export default configureStore;
