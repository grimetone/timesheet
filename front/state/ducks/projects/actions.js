import { actionType} from './types';

/**
 * Action for projects request
 */
export const projectsRequest = () => ({
  type: actionType.PROJECTS_REQUEST,
});

/**
 * Action for successful projects request
 */
export const projectsFailure = (projects) => ({
  type: actionType.PROJECTS_SUCCESS,
  projects
});

/**
 * Action for failed projects request
 */
export const projectsFailure = (error) => ({
  type: actionType.PROJECTS_FAILURE,
  payload: { error },
});

export {};
