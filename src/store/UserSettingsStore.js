import { types } from "mobx-state-tree";
import { UserSettings } from "./base/UserSettings";

export const UserSettingsStore = types.model('UserSettingsStore', {
  settings: types.optional(UserSettings, {}),
})
.actions(self => ({
  updateSettings: newSettings => {
    self.settings = newSettings
  },
}));
