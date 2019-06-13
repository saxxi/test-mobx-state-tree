import { AuthStore } from './AuthStore';
import { CampaignsStore } from './CampaignsStore';

// const CombinedStore = types.compose(Store1, Store2).named('CombinedStore'); // Merges the two stores

const auth = AuthStore.create();
const campaignsStore = CampaignsStore.create()

export const store = {
  auth,
  // notifications,
  // mails,
  campaignsStore,
  // sends,
  // activity,
  // inventory,
  // settings,
};
