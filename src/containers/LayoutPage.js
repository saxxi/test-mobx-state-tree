import React from 'react';
import { observer, inject } from 'mobx-react';
import AvailableCampaignsPage from './AvailableCampaignsPage';
import { NotificationLister } from '../components/NotificationLister';

const LayoutPage = inject('auth', 'campaignsStore')(
  observer(({ auth, campaignsStore }) => {
    return (
      <div>
        <NotificationLister />
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
          {campaignsStore.availableCampaigns && <AvailableCampaignsPage />}
        </div>
      </div>
    );
  })
);

export default LayoutPage;
