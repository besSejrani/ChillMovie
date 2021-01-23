import { UiType } from "./uiTypes";

interface UiState {
  isSideDrawerOpen: boolean;
  isDarkTheme: boolean;
  isShareDialogOpen: boolean;
  closeShareDialog: string;
  shareMovie: object;
}

const initialState = {
  isSideDrawerOpen: false,
  isDarkTheme: false,
  isShareDialogOpen: false,
  closeShareDialog: "",
  shareMovie: {
    id: "",
    name: "",
  },
};

interface Action {
  type: string;
  payload?: any;
}

export default (state: UiState = initialState, action: Action): UiState => {
  const { type, payload } = action;

  switch (type) {
    case UiType.TOGGLE_SIDE_DRAWER:
      return { ...state, isSideDrawerOpen: !state.isSideDrawerOpen };

    case UiType.TOGGLE_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };

    case UiType.TOGGLE_SHARE_DIALOG:
      return { ...state, isShareDialogOpen: !state.isShareDialogOpen };

    case UiType.SHARE_MOVIE:
      return { ...state, shareMovie: { ...payload } };

    default:
      return state;
  }
};
