import produce from "immer";

import { actionType } from "./types";
const initialState = {
  user: "",
  loading: false,
  error: ""
};

const reducer = (
  state = initialState,
  action
) =>
  produce(state, draft => {
    switch (action.type) {
      case actionType.USER_LOGIN_REQUEST:
        draft.loading = true;
        draft.error = "";
        return draft;
      case actionType.USER_LOGIN_SUCCESS:
        draft.loading = false;
        draft.error = "";
        return draft;
      case actionType.USER_LOGIN_FAILURE:
        draft.loading = false,
        draft.error = action.payload.error;
        return draft;
      case actionType.USER_LOGOUT:
        draft.loading = false;
        return draft;
      case actionType.USER_CREATE_REQUEST:
        draft.loading = true;
        draft.error = ';'
        return draft;
      case actionType.USER_CREATE_SUCCESS:
        draft.loading = false;
        draft.error = '';
        return draft;
      case actionType.USER_CREATE_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      case actionType.USER_DELETE_REQUEST:
        draft.loading = true;
        draft.error = ';'
        return draft;
      case actionType.USER_DELETE_SUCCESS:
        draft.loading = false;
        draft.error = '';
        return draft;
      case actionType.USER_DELETE_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      case actionType.USER_EDIT_REQUEST:
        draft.loading = true;
        draft.error = "";
        return draft;
      case actionType.USER_EDIT_SUCCESS:
        draft.loading = false;
        draft.error = '';
        return draft;
      case actionType.USER_EDIT_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      default:
        return state;
    }
  });

export default reducer;
