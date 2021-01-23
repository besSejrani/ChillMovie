import { UiType } from "./uiTypes";

// ========================================================================================================

export const toggleSideDrawer = () => {
  return {
    type: UiType.TOGGLE_SIDE_DRAWER,
  };
};

// ========================================================================================================

export const toggleTheme = () => {
  return {
    type: UiType.TOGGLE_THEME,
  };
};

// ========================================================================================================

export const openShareDialog = () => {
  return {
    type: UiType.TOGGLE_SHARE_DIALOG,
  };
};

// ========================================================================================================

export const shareMovie = (payload: object) => {
  return {
    type: UiType.SHARE_MOVIE,
    payload,
  };
};
