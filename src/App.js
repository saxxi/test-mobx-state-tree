import React from 'react';
import { observer, inject } from 'mobx-react';
import GuestPage from './containers/GuestPage';
import LayoutPage from './containers/LayoutPage';

import './App.css'

const App = inject('auth')(
  observer(({ auth }) => {
    return (
      <div>
        {auth.currentUser ? <LayoutPage /> : <GuestPage />}
      </div>
    );
  })
);

export default App
