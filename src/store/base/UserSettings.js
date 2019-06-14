import { types } from "mobx-state-tree";

export const UserSettings = types.model('Settings', {
  email: '', // Optional field inferred as type string with default as ''
  password: '',
});
