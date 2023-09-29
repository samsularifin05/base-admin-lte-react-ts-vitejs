import { Action } from "redux";
import { AppActionTheme } from "./theme";
import { ThemeState } from "./theme";
import { UtilityState } from "./utility";

type RootAction = Action | AppActionTheme;
export default RootAction;

export interface RootState<T> {
  utility: UtilityState<T>;
  theme: ThemeState;
}

export * from "./theme";
export * from "./utility";
