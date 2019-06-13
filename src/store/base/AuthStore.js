import { types, flow } from 'mobx-state-tree';
import { UserStore } from './UserStore';
import { AuthApi } from '../../services/Api';

export const AuthStore = types.model({
  authToken: types.maybe(types.string),
  currentUser: types.maybe(UserStore),
}).actions(self => ({
  login: flow(function* (username, password) {
    const res = yield AuthApi.login(username, password);
    self.currentUser = res.data;
  }),
}));
