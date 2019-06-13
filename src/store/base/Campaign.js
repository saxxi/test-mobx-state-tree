import { types } from "mobx-state-tree";

export const Campaign = types.model('Campaign', {
  id: types.identifier,
  name: types.string,
});
