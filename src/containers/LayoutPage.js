import React from 'react';
import { observer, inject } from 'mobx-react';
import CampaignsPage from './CampaignsPage';

const LayoutPage = inject('auth', 'campaignsStore')(
  observer(({ campaignsStore, auth }) => {
    return (
      <div>
        <p>Welcome "{auth.currentUser.name}"!</p>
        <div>
          Menu:
          <ul>
            <li>
              <span onClick={() => campaignsStore.loadCampaigns()} className='btn'>load campaigns</span>
            </li>
            <li>sends</li>
            <li>activity</li>
            <li>inventory</li>
            <li>settings</li>
            <li>...</li>
          </ul>
        </div>
        <div>
          {campaignsStore.campaigns && <CampaignsPage />}
        </div>
      </div>
    );
  })
);

export default LayoutPage;
