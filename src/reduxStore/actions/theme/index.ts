import themesActions from "./action";

export * from "./action";
export * from "./type";

export interface ThemeState {
  getSidebarToggle: boolean;
  handleSetPageSidebar: boolean;
  handleSetPageHeader: boolean;
  handleSetContent: boolean;
  handleSetFooter: boolean;
  appSidebarEndMobileToggled: boolean;
  appSidebarMinify: boolean;
  handleSetBodyWhiteBg: boolean;
}

export { themesActions };
