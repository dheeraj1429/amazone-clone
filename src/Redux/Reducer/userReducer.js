import { ACTION_TYPE } from "../ActionType/actionType";
const initalState = {
  NavbarData: [],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_DATA:
      return {
        ...state,
        NavbarData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
