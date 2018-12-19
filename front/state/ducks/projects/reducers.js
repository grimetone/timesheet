import { combineReducers } from 'redux';
import { actionType, App } from './types';

const initialState = {
  projectsList: [],
  loading: false,
  error: '',
};

const reducer = (
  state = initialState,
  action,
)  =>
  produce(state, draft => {
    switch (action.type) {
      case actionType.PROJECTS_REQUEST:
        draft.loading = true;
        draft.error = '';
        return draft;
      case actionType.PROJECTS_SUCCESS:
        draft.loading = false;
        return draft;
      case actionType.PROJECTS_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      default:
        return state;
    }
  });

export default reducer;
