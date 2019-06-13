import React from 'react';
import { observer, inject } from 'mobx-react';

const GuestPage = inject('auth')(
  observer(({ auth }) => {
    const username = 'mark@gmail.com';
    return (
      <div>
        <span onClick={() => auth.login(username, '12345678')} className='btn'>
          Click here to login as "{username}"
        </span>
      </div>
    );
  })
);

export default GuestPage;
