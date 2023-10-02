import {
  AppActionTypesTheme,
  handleSidebarToggle,
  appSidebarMinifyAction,
  handleSetBodyWhiteBg,
  handleSetContentAction,
  handleSetFooterAction,
  handleSetPageHeaderAction,
  handleSetPageSidebarAction,
} from "./type";

const appSidebarMinify = (data: boolean): appSidebarMinifyAction => {
  return {
    type: AppActionTypesTheme.SIDERBARMINIFY,
    payload: data,
  };
};

const setSidebarToggle = (data: boolean): handleSidebarToggle => {
  return {
    type: AppActionTypesTheme.TOOGLESIDEBAR,
    payload: data,
  };
};

const handleSetPageSidebar = (data: boolean): handleSetPageSidebarAction => {
  return {
    type: AppActionTypesTheme.SIDEBAR,
    payload: data,
  };
};

const handleSetPageHeader = (data: boolean): handleSetPageHeaderAction => {
  return {
    type: AppActionTypesTheme.HEADER,
    payload: data,
  };
};

const handleSetContent = (data: boolean): handleSetContentAction => {
  return {
    type: AppActionTypesTheme.CONTENT,
    payload: data,
  };
};

const handleSetFooter = (data: boolean): handleSetFooterAction => {
  return {
    type: AppActionTypesTheme.FOOTER,
    payload: data,
  };
};
const handleSetBodyWhiteBg = (data: boolean): handleSetBodyWhiteBg => {
  return {
    type: AppActionTypesTheme.BGWHITE,
    payload: data,
  };
};

const themesActions = {
  handleSetFooter,
  handleSetContent,
  handleSetPageHeader,
  handleSetPageSidebar,
  setSidebarToggle,
  appSidebarMinify,
  handleSetBodyWhiteBg,
};

export default themesActions;
