import {INVOICES} from '../actionsTypes';

export const getListInvoicesAction = payload => ({
  type: INVOICES.GET_INVOICE,
  payload,
});
export const createInvoiceAction = payload => ({
  type: INVOICES.CREATE_INVOICE,
  payload,
});
