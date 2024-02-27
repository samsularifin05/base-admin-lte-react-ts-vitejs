import { Action } from "redux";

export const AppActionTypes = {
  HIDE_MODAL: "HIDE_MODAL",
  SHOW_MODAL: "SHOW_MODAL",
  IS_LOADING: "IS_LOADING",
  IS_EDIT: "IS_EDIT",
  GET_DATA_EDIT: "GET_DATA_EDIT",
  LOADING_TABEL: "LOADING_TABEL",
  SIMPAN_DATA_TMP: "SIMPAN_DATA_TMP",
  SHOW_BUTTON_DELETE: "SHOW_BUTTON_DELETE",
  SCREEN_SIZE: "SCREEN_SIZE",
  ISLOGIN: "ISLOGIN",
} as const;

export interface HideModalAction<T>
  extends Action<typeof AppActionTypes.HIDE_MODAL> {
  payload: ModalData<T>;
}

export interface ShowModalAction<T>
  extends Action<typeof AppActionTypes.SHOW_MODAL> {
  payload: ModalData<T>;
}

export interface SetLoadingAction
  extends Action<typeof AppActionTypes.IS_LOADING> {
  payload: LoadingData;
}

export interface SetIsEditAction extends Action<typeof AppActionTypes.IS_EDIT> {
  payload: boolean;
}
export interface ShowButtonDelete
  extends Action<typeof AppActionTypes.SHOW_BUTTON_DELETE> {
  payload: boolean;
}

export interface GetDataEditAction
  extends Action<typeof AppActionTypes.GET_DATA_EDIT> {
  payload: [];
}

export interface LoadingTabelAction
  extends Action<typeof AppActionTypes.LOADING_TABEL> {
  payload: boolean;
}
export interface SimpanDataTmpAction<T>
  extends Action<typeof AppActionTypes.SIMPAN_DATA_TMP> {
  payload: DataTmp<T>;
}
export interface ScreenSizeAction
  extends Action<typeof AppActionTypes.SCREEN_SIZE> {
  payload: string;
}
export interface setIsLogin extends Action<typeof AppActionTypes.ISLOGIN> {
  payload: boolean;
}

export interface LoadingData {
  table?: boolean;
  button?: boolean;
  screen?: boolean;
}
export interface ModalData<T> {
  isModalShow: boolean;
  isEdit: boolean;
  data?: T;
  namaForm?: string;
}
export interface DataTmp<T> {
  data: T;
  namaForm?: string;
}

export interface UtilityState<T> {
  getLoading: LoadingData;
  setLoadingTabel: boolean;
  getShowButtonDelete: boolean;
  getScreenSize: string;
  getIsLogin: boolean;
  getDataEdit: [];
  getDataTmp: DataTmp<T>;
  getModal: ModalData<T>;
  hideModal: ModalData<T>;
  // Tambahkan properti lainnya sesuai kebutuhan
}

export type AppActionUtility<T> =
  | HideModalAction<T>
  | ShowModalAction<T>
  | SetLoadingAction
  | SetIsEditAction
  | GetDataEditAction
  | ShowButtonDelete
  | setIsLogin
  | ScreenSizeAction
  | SimpanDataTmpAction<T>
  | LoadingTabelAction;
