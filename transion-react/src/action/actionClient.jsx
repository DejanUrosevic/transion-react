import { CLIENT_CREATE_INVOICE } from '../types';
import clientApi from '../api/client-api';

export const createInvoiceAction = () => ({
    type: CLIENT_CREATE_INVOICE
});

export const createInvoice = () => dispatch => {
    dispatch(createInvoiceAction());
}