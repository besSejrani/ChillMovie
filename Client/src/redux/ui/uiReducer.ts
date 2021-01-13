import * as uiTypes from "./uiTypes";

const initialState = { isSideDrawerOpen: false, isDarkTheme: false };

export default (state = initialState, actions: any) => {
  const { type, payload } = actions;

  switch (type) {
    case uiTypes.TOGGLE_SIDE_DRAWER:
      return { ...state, isSideDrawerOpen: !state.isSideDrawerOpen };

    case uiTypes.TOGGLE_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };

    default:
      return state;
  }
};
