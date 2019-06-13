import { types, getParent, hasParent } from "mobx-state-tree";
// import { store } from "../AppStore";

export const Notification = types.model('Notification', {
  message: types.string,
  level: types.optional(types.enumeration('Level', ['info', 'success', 'warning', 'error']), 'info'),
  created_at: types.optional(types.integer, () => new Date().getTime()),
})
.actions(self => ({
  hide() {
    if (hasParent(self)) {
      getParent(self, 2).removeNotification(self);
    }
    // store.notificationsStore.removeNotification(self); // Also absolute path is possible
  },
}));
