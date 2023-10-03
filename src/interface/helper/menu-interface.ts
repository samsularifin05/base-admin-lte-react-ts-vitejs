export interface ChildrenMenu {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  exact?: boolean;
  navheader?: boolean;
  children?: Array<ChildrenMenu>;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: boolean;
  navheader?: boolean;
  children?: Array<ChildrenMenu>;
}
