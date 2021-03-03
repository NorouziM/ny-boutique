import SHOP_DATA from "../components/shop.data";
const INITIAL_STATE = {
  SHOP_DATA,
  isLoading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SHOP_DATA": {
      return {
        ...state,
        SHOP_DATA: action.payload,
      };
    }
    case "FETCH_SHOP_DATA_SUCCESS": {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
