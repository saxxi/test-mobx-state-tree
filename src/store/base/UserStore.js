import { types } from "mobx-state-tree";

export const UserStore = types.model('UserStore', {
  name: types.string,
  token: types.string,
  address: types.model({
    city: types.string,
    country: types.string,
  }),
  gender: types.string,
}).actions(self => ({
  edit (userData) {
    self.address = userData.address;
    self.gender = userData.gender;
  },
}));
