import axios from 'axios';
import ApiUtils from '../../utils/apiUtils';

export const loginInApi = () =>
  new Promise((resolve, reject) => {
    axios
      .post(
        'https://sandbox.101digital.io/token',
        {
          client_id: 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
          client_secret: '0Exp4dwqmpON_ezyhfm0o_Xkowka',
          grant_type: 'password',
          scope: 'openid',
          username: 'dung+octopus4@101digital.io',
          password: 'Abc@123456',
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(response => {
        const {data} = response;
        resolve(data);
      })
      .catch(err => console.log(err));
  });

export const getUserProfileApi = () =>
  ApiUtils.get(
    'https://sandbox.101digital.io/membership-service/1.2.0/users/me',
  );

export const getInvoicesApi = payload =>
  ApiUtils.get(
    'https://sandbox.101digital.io/invoice-service/1.0.0/invoices',
    payload,
  );
export const createInvoiceApi = payload =>
  ApiUtils.post(
    'https://sandbox.101digital.io/invoice-service/2.0.0/invoices',
    payload,
  );
