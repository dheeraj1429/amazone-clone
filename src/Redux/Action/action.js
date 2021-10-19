import { ACTION_TYPE } from "../ActionType/actionType";

export const SendData = (data) => {
  return {
    type: ACTION_TYPE.SEND_DATA,
    payload: data,
  };
};

export const setData = (data) => {
  return {
    type: ACTION_TYPE.SET_DATA,
    payload: data,
  };
};
