import { types } from 'mobx-state-tree';
import { UserSettings } from './base/UserSettings';
import { notificationsStore } from './AppStore';

export const UserSettingsStore = types.model('UserSettingsStore', {
  settings: types.optional(UserSettings, {}),
})
.actions(self => ({
  updateSettings: newSettings => {
    self.settings = newSettings
    notificationsStore.addNotification({message: 'I have updated the settings'})
  },
}));
