import React from 'react';
import { inject, observer } from 'mobx-react';

export const NotificationLister = inject('notificationsStore')(
  observer(({ notificationsStore }) => {
    if (!notificationsStore.list || !notificationsStore.list.length) return null;
    return <div>
      You have {notificationsStore.list.length} notifications:
      <ul>
        {notificationsStore.list.map((notification, index) => (
          <li key={index}>
            {notification.level} - {notification.message} - {notification.created_at}
            &nbsp;&nbsp;
            <span onClick={() => notification.hide()} className="btn">×</span>
          </li>
        ))}
      </ul>
    </div>;
  })
);
