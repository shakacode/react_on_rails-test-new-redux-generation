import actionTypes from '../constants/helloWorldConstants';

const helloWorldReducer = (state = { name: '' }, action) => {
  const { type, text } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:

      // use spread operator to avoid mutating this state
      return { ...state, name: text };
    default:
      return state;
  }
};

export default helloWorldReducer;
