import * as actions from './actions';
import { actionType } from './types';

function* projectsRequest(action) {
  try {
    yield put(actions.projectsSuccess());
  } catch (e) {
    yield put(actions.projectsFailure(e.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(actionType.PROJECTS_REQUEST, projectsRequest);
}