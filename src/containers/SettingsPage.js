import React, { useState } from 'react';
import SettingsForm from "../components/SettingsForm";
import { inject, observer } from 'mobx-react';

export const SettingsPage = inject('userSettingsStore')(
  observer(({ userSettingsStore }) => {
    const [userSettings, setUserSettings] = useState(userSettingsStore.settings)
    const onSubmit = (settings, { setSubmitting }) => {
      setTimeout(() => {
        setUserSettings(settings)
        setSubmitting(false);
      }, 500);
    }

    return <div>
      <SettingsForm
        initialValues={userSettings}
        onSubmit={onSubmit} />
      {JSON.stringify(userSettings)}
    </div>;
  })
);
