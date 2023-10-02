import { AppActionTheme, AppActionTypesTheme, ThemeState } from "../actions";

const initialState: ThemeState = {
  handleSetPageSidebar: true,
  handleSetPageHeader: true,
  handleSetContent: true,
  handleSetFooter: true,
  appSidebarEndMobileToggled: false,
  appSidebarMinify: false,
  handleSetBodyWhiteBg: false,
  getSidebarToggle: false,
};

const themes = (state: ThemeState = initialState, action: AppActionTheme) => {
  switch (action.type) {
    case AppActionTypesTheme.TOOGLESIDEBAR:
      return {
        ...state,
        getSidebarToggle: action.payload,
      };
    case AppActionTypesTheme.SIDEBAR:
      return {
        ...state,
        handleSetPageSidebar: action.payload,
      };
    case AppActionTypesTheme.HEADER:
      return {
        ...state,
        handleSetPageHeader: action.payload,
      };
    case AppActionTypesTheme.CONTENT:
      return {
        ...state,
        handleSetContent: action.payload,
      };
    case AppActionTypesTheme.FOOTER:
      return {
        ...state,
        handleSetFooter: action.payload,
      };

    case AppActionTypesTheme.SIDERBARMINIFY:
      return {
        ...state,
        appSidebarMinify: action.payload,
      };
    case AppActionTypesTheme.BGWHITE:
      return {
        ...state,
        handleSetBodyWhiteBg: action.payload,
      };
    default:
      return state;
  }
};

export default themes;
