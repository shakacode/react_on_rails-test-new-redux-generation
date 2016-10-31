import { combineReducers } from 'redux';
// Revision 161029:
// here we don't have to use the redux-immutable version of combineReducers
// making the root state a Immutable object because it's not benefitial
// and we will have to do some conversion when mapping state to props

// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import $$person from './person';

const rootReducer = combineReducers({
  $$person,
});
// Revision 161029:
// this dollar sign naming also seems weird to me, because usually I like to
// write something like combineReducers({$$person, $$products}), but the
// reducer I imported isn't an Immutable object which shouldn't have those
// dollar signs as prefix. also for me I usually know which one is immutable.
// but it's more like a preference thing

export default rootReducer;
// Revision 161029:
// using combineReducers() to create a root reducer in this file is more
// straightforward and is usually what people do with redux
