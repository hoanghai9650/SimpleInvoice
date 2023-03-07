import {call, put, takeEvery} from 'redux-saga/effects';
import {getUserProfileApi, loginInApi} from '../api/apis';
import AUTH from '../actionsTypes';
import {
  getUserProfileSuccessActions,
  loginSuccessActions,
} from '../actions/auth';

export function* loginSagas({payload}) {
  const {callback = () => {}} = payload;
  try {
    const result = yield call(loginInApi);
    yield put(loginSuccessActions(result.access_token));
    const userProfile = yield call(getUserProfileApi);

    if (userProfile) {
      yield put(getUserProfileSuccessActions(userProfile));
      yield callback(null, userProfile.data);
    }
  } catch (error) {
    yield callback(error, null);
  }
}

export function* watchLoginSagas() {
  yield takeEvery(AUTH.LOGIN, loginSagas);
}
