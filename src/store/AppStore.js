import { AuthStore } from './AuthStore';
import { CampaignsStore } from './base/CampaignsStore';
import { NotificationsStore } from './utils/NotificationsStore';

// const CombinedStore = types.compose(Store1, Store2).named('CombinedStore'); // Merges the two stores

const auth = AuthStore.create();
const campaignsStore = CampaignsStore.create()
const notificationsStore = NotificationsStore.create()

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
