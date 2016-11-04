import Immutable from 'immutable';
import actionTypes from '../constants/helloWorldConstants';

const person = (state = Immutable.Map({ name: 'John Doe' }), action) => {
  const { type, name } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return state.set('name', name);
    default:
      return state;
  }
};

export default person;
