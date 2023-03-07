import {call, put, takeEvery} from 'redux-saga/effects';
import {getInvoicesApi} from '../api/apis';
import {INVOICES} from '../actionsTypes';

export function* getInvoiceSaga({payload}) {
  const {callback = () => {}, loadMore = false, ...ctx} = payload;
  try {
    const result = yield call(getInvoicesApi, ctx);
    if (loadMore) {
      yield callback(null, result);
    } else {
      yield callback(null, result);
    }
    if (result) {
      yield callback(null, result);
    }
  } catch (error) {
    yield callback(error, null);
  }
}

export function* watchGetInvoiceSagaSagas() {
  yield takeEvery(INVOICES.GET_INVOICE, getInvoiceSaga);
}
