import { types } from "mobx-state-tree";

import { AvailableCampaignsStore } from '../collection/AvailableCampaignsStore';

export const CampaignsStore = types.model('CampaignsStore', {
  availableCampaigns: types.maybe(AvailableCampaignsStore),
})
.actions(self => {
  return {
    loadCampaigns: () => {
      self.availableCampaigns = AvailableCampaignsStore.create()
    },
  }
})
