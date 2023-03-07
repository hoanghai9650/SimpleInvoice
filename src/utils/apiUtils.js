import axios from 'axios';
import store from '../appRedux/store/store';
import {get} from 'lodash';
axios.interceptors.request.use(
  config => {
    const accessToken = get(store.getState(), 'auth.token', {});
    const orgToken = get(
      store.getState(),
      'auth.userProfile.data.memberships[0].token',
      {},
    );
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (orgToken && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.org_token = `${orgToken}`;
    }
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  error => {
    Promise.reject(error);
  },
);
export default class ApiUtils {
  static get(uri, params, headers) {
    return new Promise((resolve, reject) =>
      axios
        .get(uri, {
          headers: headers,
          params,
        })
        .then(response => {
          const {data} = response;
          resolve(data);
        })
        .catch(err => console.log(err)),
    );
  }
  static post(uri, postData, headers) {
    return new Promise((resolve, reject) => {
      axios
        .post(uri, postData, {
          headers: headers,
        })
        .then(response => {
          const {data} = response;
          resolve(data);
        })
        .catch(err => console.log(err));
    });
  }
}
