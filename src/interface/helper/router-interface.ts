import { ReactElement } from "react";

export interface RouteInterface {
  path: string;
  exact: boolean;
  title?: string;
  component: () => ReactElement;
}
