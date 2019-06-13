import React from 'react';
import { observer, inject } from 'mobx-react';

const Campaigns = inject('campaignsStore')(
  observer(({ campaignsStore }) => {
    return (
      <div>
        {campaignsStore.campaigns.state === 'loading' && <div>Loading...</div>}
        {campaignsStore.campaigns.state === 'error' && <div>An error occured while fetching your data.</div>}
        {campaignsStore.campaigns.state === 'loaded' && <div>
          <p>Campaign list here</p>
          <ul>
            {campaignsStore.campaigns.list.map(campaign => <li key={campaign.id}>{campaign.name}</li>)}
          </ul>
        </div>}
      </div>
    );
  })
);

export default Campaigns;
