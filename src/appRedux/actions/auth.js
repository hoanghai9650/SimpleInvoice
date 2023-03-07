import AUTH from '../actionsTypes';

export const loginActions = payload => ({
  type: AUTH.LOGIN,
  payload,
});
export const loginSuccessActions = payload => ({
  type: AUTH.LOGIN_SUCCESS,
  payload,
});
export const getUserProfileSuccessActions = payload => ({
  type: AUTH.GET_USER_PROFILE_SUCCESS,
  payload,
});
