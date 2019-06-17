import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import AvailableCampaignsPage from './AvailableCampaignsPage';
import { NotificationLister } from '../components/NotificationLister';
import { SettingsPage } from './SettingsPage';

const LayoutPage = inject('auth')(
  observer(({ auth }) => {
    const [currentPage, setPage] = useState(null);

    return (
      <div>
        <NotificationLister />
        <p>Welcome "{auth.currentUser.name}"!</p>
        <div>
          Menu:
          <ul>
            <li><span onClick={() => setPage('availableCampaignsPage')} className='btn'>Available Campaigns</span></li>
            <li>sends</li>
            <li>activity</li>
            <li>inventory</li>
            <li><span onClick={() => setPage('settingsPage')} className='btn'>Settings</span></li>
            <li>...</li>
            <li><span onClick={() => auth.logout()} className='btn'>Exit</span></li>
          </ul>
        </div>
        {currentPage === 'availableCampaignsPage' && <AvailableCampaignsPage />}
        {currentPage === 'settingsPage' && <SettingsPage />}
      </div>
    );
  })
);

export default LayoutPage;
