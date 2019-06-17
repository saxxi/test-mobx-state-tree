import { wiretap, inspect } from 'mobx-wiretap/mst';
import { AuthStore } from './AuthStore';
import { CampaignsStore } from './base/CampaignsStore';
import { NotificationsStore } from './utils/NotificationsStore';
import { UserSettingsStore } from './UserSettingsStore';

// const CombinedStore = types.compose(Store1, Store2).named('CombinedStore'); // Merges the two stores

export const notificationsStore = NotificationsStore.create()
export const auth = AuthStore.create();
export const campaignsStore = CampaignsStore.create({}, {
  notificationsStore,
})
export const userSettingsStore = UserSettingsStore.create()

wiretap('Todo app');
inspect('auth', auth, ['login']);
inspect('campaignsStore', campaignsStore, ['loadCampaigns']);
inspect('notificationsStore', notificationsStore, ['addNotification', 'removeNotification']);
inspect('userSettingsStore', userSettingsStore, ['updateSettings']);

export const store = {
  auth,
  notificationsStore,
  // mails,
  campaignsStore,
  // sends,
  // activity,
  // inventory,
  userSettingsStore,
};
