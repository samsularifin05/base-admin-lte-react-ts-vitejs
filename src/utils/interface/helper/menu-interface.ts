interface Children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  children?: Array<Children>;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: boolean;
  navheader?: boolean;
  children?: Array<Children>;
}
