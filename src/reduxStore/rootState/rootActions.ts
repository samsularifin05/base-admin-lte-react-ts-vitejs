import { Action } from "redux";
import { AppActionTheme, ThemeState, UtilityState } from "../actions";

type RootAction = Action | AppActionTheme;
export default RootAction;

export interface RootState<T> {
  utility: UtilityState<T>;
  theme: ThemeState;
}
