import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const configureStore = (railsProps) => (
  createStore(rootReducer, railsProps)
);

export default configureStore;
