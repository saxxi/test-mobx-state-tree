import React from 'react';
import { observer, inject } from 'mobx-react';
import { RandomComponent } from './RandomComponent';

const AvailableCampaigns = inject('campaignsStore', 'auth')(
  observer(({ campaignsStore, auth }) => {

    if (!campaignsStore.availableCampaigns) {
      campaignsStore.loadCampaigns()
      return null;
    }

    return (
      <div>
        {campaignsStore.availableCampaigns.state === 'loading' && <div>Loading...</div>}
        {campaignsStore.availableCampaigns.state === 'error' && <div>An error occured while fetching your data.</div>}
        {campaignsStore.availableCampaigns.state === 'loaded' && <div>
          <p>Campaign list here</p>
          <ul>
            {campaignsStore.availableCampaigns.list.map(campaign => <li key={campaign.id}>{campaign.name}</li>)}
          </ul>
          <p>(injected auth, you are {auth.currentUser.name})</p>
          <RandomComponent />
        </div>}
      </div>
    );
  })
);

export default AvailableCampaigns;
