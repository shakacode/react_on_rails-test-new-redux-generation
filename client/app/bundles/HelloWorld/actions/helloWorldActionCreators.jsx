/* eslint-disable import/prefer-default-export */

import actionTypes from '../constants/helloWorldConstants';

export const updateName = (text) => ({
  type: actionTypes.HELLO_WORLD_NAME_UPDATE,
  text,
});
