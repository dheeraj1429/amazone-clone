import { ACTION_TYPE } from "../ActionType/actionType";
const initalState = {
  NavbarData: [
    { name: "All" },
    { name: "Mobiles" },
    { name: "Best Sellers" },
    { name: "Electroincs" },
    { name: "Fashion" },
    { name: "Customer Service" },
    { name: "Prime" },
    { name: "Home & Kitchen" },
    { name: "Amazone Pay" },
    { name: "Computers" },
    { name: "Today's Deals" },
    { name: "New Releases" },
    { name: "Toys & Games" },
    { name: "Books" },
    { name: "Coupons" },
    { name: "Sell" },
  ],
  searchData: "",
  listData: [],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SEND_DATA:
      return {
        ...state,
        searchData: action.payload,
      };

    case ACTION_TYPE.SET_DATA:
      return {
        ...state,
        listData: {
          ...state.listData,
          data: action.payload,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
