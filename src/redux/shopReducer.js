import SHOP_DATA from "../components/shop.data";
const INITIAL_STATE = {
  SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SHOP_DATA": {
      return {
        ...state,
        SHOP_DATA: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
