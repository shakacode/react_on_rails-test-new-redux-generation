import actionTypes from '../constants/helloWorldConstants';

const name = (state = '', action) => {
  const { type, text } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return text;
    default:
      return state;
  }
};

export default name;
