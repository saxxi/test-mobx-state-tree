import { types } from "mobx-state-tree";

import { Campaigns } from '../collection/Campaigns';

export const CampaignsStore = types.model('CampaignsStore', {
  campaigns: types.maybe(Campaigns),
})
.actions(self => {
  return {
    loadCampaigns: () => {
      self.campaigns = Campaigns.create()
    },
  }
})
