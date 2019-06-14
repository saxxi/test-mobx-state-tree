import { wiretap, inspect } from 'mobx-wiretap/mst';
import { AuthStore } from './AuthStore';
import { CampaignsStore } from './base/CampaignsStore';
import { NotificationsStore } from './utils/NotificationsStore';

// const CombinedStore = types.compose(Store1, Store2).named('CombinedStore'); // Merges the two stores

const auth = AuthStore.create();
const campaignsStore = CampaignsStore.create()
const notificationsStore = NotificationsStore.create()

wiretap('Todo app');
inspect('auth', auth, ['login']);
inspect('campaignsStore', campaignsStore, ['loadCampaigns']);
inspect('notificationsStore', notificationsStore, ['addNotification', 'removeNotification']);

export const store = {
  auth,
  notificationsStore,
  // mails,
  campaignsStore,
  // sends,
  // activity,
  // inventory,
  // settings,
};
