import React from 'react';
import { observer, inject } from 'mobx-react';

export const RandomComponent = inject('notificationsStore')(
  observer(({ notificationsStore }) => {
    return <div>
      I'm a random nested component!
      <span onClick={() => notificationsStore.addNotification({message: 'Hey!'})}
        className="btn">Wanna add a notification?</span>
      &nbsp;&nbsp;
      <span onClick={() => notificationsStore.addNotification({message: 'Hey!', level: 'warning'})}
        className="btn">Add a warning?</span>
    </div>
  })
)
