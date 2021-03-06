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

export const setUser = (data) => {
  return {
    type: ACTION_TYPE.SET_USER,
    payload: data,
  };
};

export const setWishList = (data) => {
  return {
    type: ACTION_TYPE.SET_WISHLIST,
    payload: data,
  };
};

export const removeItem = (data) => {
  return {
    type: ACTION_TYPE.REMOVE_ITEM,
    payload: data,
  };
};
