import { types, flow } from 'mobx-state-tree';
import { UserStore } from './base/UserStore';
import { AuthApi } from '../services/Api';

export const AuthStore = types.model({
  authToken: types.maybe(types.string),
  currentUser: types.maybe(UserStore),
}).actions(self => ({
  afterCreate () {
    const jwt = window.localStorage.getItem('jwt');
    if (jwt) {
      self.loginViaJWT(jwt)
    }
  },
  login: flow(function* (username, password) {
    const res = yield AuthApi.login(username, password);
    const userData = res.data;
    window.localStorage.setItem('jwt', userData.token);
    self.currentUser = userData;
  }),
  loginViaJWT: flow(function* (jwt) {
    const res = yield AuthApi.loginViaJWT(jwt);
    self.currentUser = res.data;
  }),
  logout: flow(function* () {
    window.localStorage.removeItem('jwt');
    self.authToken = undefined
    self.currentUser = undefined
  }),
}));
