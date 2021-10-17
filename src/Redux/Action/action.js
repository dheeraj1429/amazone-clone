import { ACTION_TYPE } from "../ActionType/actionType";

export const setData = () => {
  return {
    type: ACTION_TYPE.SET_DATA,
  };
};

export const SendData = (data) => {
  return {
    type: ACTION_TYPE.SEND_DATA,
    payload: data,
  };
};
