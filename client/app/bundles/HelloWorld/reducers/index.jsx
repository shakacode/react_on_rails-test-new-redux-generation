import { combineReducers } from 'redux';

// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import name from './name';

export default combineReducers({ name });
