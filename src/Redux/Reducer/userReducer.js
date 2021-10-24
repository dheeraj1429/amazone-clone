import { ACTION_TYPE } from "../ActionType/actionType";

import { productGroup } from "../../Components/Products/ProductGroup.util";

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
  whisList: [],
  listClone: [],
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

    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        currentUser: [action.payload],
      };

    case ACTION_TYPE.SET_WISHLIST:
      return {
        ...state,
        whisList: productGroup(state.whisList, action.payload),
        // whisList: [
        //   ...state.whisList,
        //   {
        //     ...action.payload,
        //   },
        // ],
      };

    case ACTION_TYPE.REMOVE_ITEM:
      const NewItemsList = state.whisList.filter((el) => el.id !== action.payload);

      return {
        ...state,
        whisList: NewItemsList,
      };

    case ACTION_TYPE.REMOVE_ALL_ITEM:
      return {
        ...state,
        whisList: [],
      };

    case ACTION_TYPE.CLONE_ALL_ITEM:
      return {
        ...state,
        listClone: [...state.listClone, ...state.whisList],
      };

    default:
      return state;
  }
};

export default userReducer;
