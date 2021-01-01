import { menu_items } from "./../components/Directory.data";
const INITIAL_STATE = {
  sections: menu_items,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
