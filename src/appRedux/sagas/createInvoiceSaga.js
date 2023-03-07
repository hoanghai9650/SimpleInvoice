import {call, put, takeEvery} from 'redux-saga/effects';
import {createInvoiceApi} from '../api/apis';
import {INVOICES} from '../actionsTypes';

export function* createInvoiceSaga({payload}) {
  const {callback = () => {}, ...ctx} = payload;
  try {
    const result = yield call(createInvoiceApi, ctx);

    yield callback(null, result);

    if (result) {
      yield callback(null, result);
    }
  } catch (error) {
    yield callback(error, null);
  }
}

export function* watchCreateInvoiceSaga() {
  yield takeEvery(INVOICES.CREATE_INVOICE, createInvoiceSaga);
}
