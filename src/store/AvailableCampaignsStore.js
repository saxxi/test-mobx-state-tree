import { types, flow } from "mobx-state-tree";
import { CampaignsApi } from "../services/Api";
import { Campaign } from "./base/Campaign";

export const AvailableCampaignsStore = types.model('AvailableCampaignsStore', {
  list: types.array(Campaign),
  state: types.optional(types.enumeration('State', ['loading', 'loaded', 'error']), 'loading')
})
.actions(self => {
  let pendingRequest = null // store the Promise
  return {
    afterCreate: flow(function* () {
      self.state = 'loading';
      pendingRequest = CampaignsApi.load();
      const response = yield pendingRequest;
      self.state = 'loaded';
      self.list = response.data;
    }),
    beforeDestroy: () => {
      pendingRequest.cancel() // <- this is awesome
    },
  }
})
