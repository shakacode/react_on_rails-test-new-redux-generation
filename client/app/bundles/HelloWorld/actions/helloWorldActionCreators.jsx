import actionTypes from '../constants/helloWorldConstants';

export const updateName = (name) => ({
  type: actionTypes.HELLO_WORLD_NAME_UPDATE,
  name,
});
