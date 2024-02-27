import { AppActionTypes, AppActionUtility, UtilityState } from "../actions";

function initialState<T>(): UtilityState<T> {
  return {
    getLoading: {
      table: false,
      button: false,
      screen: false,
    },

    getModal: {
      isModalShow: false,
      isEdit: false,
      data: [] as T,
      namaForm: "",
    },
    hideModal: {
      isModalShow: false,
      isEdit: false,
      data: [] as T,
      namaForm: "",
    },

    setLoadingTabel: false,
    getShowButtonDelete: false,
    getDataEdit: [],
    getDataTmp: {
      data: [] as T,
    },

    getScreenSize: "lg",
    getIsLogin: false,
  };
}

const utility = <T>(
  state: UtilityState<T> = initialState(),
  action: AppActionUtility<T>
): UtilityState<T> => {
  switch (action.type) {
    case AppActionTypes.SHOW_BUTTON_DELETE:
      return {
        ...state,
        getShowButtonDelete: action.payload,
      };
    case AppActionTypes.LOADING_TABEL:
      return {
        ...state,
        setLoadingTabel: action.payload,
      };
    case AppActionTypes.GET_DATA_EDIT:
      return {
        ...state,
        getDataEdit: action.payload,
      };
    case AppActionTypes.IS_LOADING:
      return {
        ...state,
        getLoading: action.payload,
      };
    case AppActionTypes.HIDE_MODAL:
      return {
        ...state,
        hideModal: action.payload,
      };
    case AppActionTypes.ISLOGIN:
      return {
        ...state,
        getIsLogin: action.payload,
      };
    case AppActionTypes.SHOW_MODAL:
      return {
        ...state,
        getModal: action.payload,
      };
    case AppActionTypes.SIMPAN_DATA_TMP:
      return {
        ...state,
        getDataTmp: action.payload,
      };
    case AppActionTypes.SCREEN_SIZE:
      return {
        ...state,
        getScreenSize: action.payload,
      };

    default:
      return state;
  }
};

export default utility;
