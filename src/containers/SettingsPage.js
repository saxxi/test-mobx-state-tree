import React from 'react';
import SettingsForm from '../components/SettingsForm';
import { inject, observer } from 'mobx-react';

export const SettingsPage = inject('userSettingsStore')(
  observer(({ userSettingsStore }) => {
    const onSubmit = (settings, { setSubmitting }) => {
      setTimeout(() => {
        userSettingsStore.updateSettings(settings)
        setSubmitting(false);
      }, 500);
    }

    return <div>
      <SettingsForm
        initialValues={userSettingsStore.settings}
        onSubmit={onSubmit} />
      {JSON.stringify(userSettingsStore.settings)}
    </div>;
  })
);
