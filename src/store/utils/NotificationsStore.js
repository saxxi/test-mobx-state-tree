import { types } from "mobx-state-tree";
import { Notification } from "../base/Notification";

export const NotificationsStore = types.model('NotificationsStore', {
  list: types.array(Notification),
})
.actions(self => {
  return {
    addNotification: (notification) => {
      self.list.push(notification)
    },
    removeNotification: (notification) => {
      self.list = self.list.filter(el => el !== notification);
    }
  }
});
