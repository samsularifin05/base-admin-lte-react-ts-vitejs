import { createStore, combineReducers, Action } from "redux";
import { reducer as formReducer } from "redux-form";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import RootAction, { RootState } from "../actions";
import utilityReducer from "./reducerUtility";
import themeReducer from "./reducerTheme";

export const rootReducer = combineReducers({
  form: formReducer,
  utility: utilityReducer,
  theme: themeReducer
});
const store = createStore(rootReducer);

export type AppDispatch = ThunkDispatch<RootState<string>, unknown, RootAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState<string>,
  unknown,
  Action<string>
>;
export const useAppSelector: TypedUseSelectorHook<RootState<string>> =
  useSelector;

export default store;
