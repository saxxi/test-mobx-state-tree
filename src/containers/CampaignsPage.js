import React from 'react';
import { observer, inject } from 'mobx-react';

const Campaigns = inject('campaignsStore', 'auth')(
  observer(({ campaignsStore, auth }) => {
    return (
      <div>
        {campaignsStore.campaigns.state === 'loading' && <div>Loading...</div>}
        {campaignsStore.campaigns.state === 'error' && <div>An error occured while fetching your data.</div>}
        {campaignsStore.campaigns.state === 'loaded' && <div>
          <p>Campaign list here</p>
          <ul>
            {campaignsStore.campaigns.list.map(campaign => <li key={campaign.id}>{campaign.name}</li>)}
          </ul>
          <p>(injected auth, you are {auth.currentUser.name})</p>
        </div>}
      </div>
    );
  })
);

export default Campaigns;
