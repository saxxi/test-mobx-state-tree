import Promise from 'bluebird'

Promise.config({
  cancellation: true,
});

export const CampaignsApi = {
  load: () => new Promise(resolve => {
    const res = {
      data: [
        { id: '1', name: 'The Best Ltd' },
        { id: '2', name: 'Also Good Ltd' },
        { id: '3', name: 'Wouldnt trust, would ya Ltd' },
      ],
    }
    setTimeout(resolve.bind(null, res), 500)
  }),
}

export const CompanyApi = {
  get: () => new Promise(resolve => {
    const res = {
      data: {
        id: 3321,
        name: 'Very Nice Company Ltd',
      },
    }
    setTimeout(resolve.bind(null, res), 500)
  }),
}

const genericAuth = new Promise(resolve => {
  const res = {
    data: {
      name: 'Mark',
      token: 'ey-the-token123-456',
      username: 'mark@gmail.com',
      address: {
        city: 'London',
        country: 'UK',
      },
      gender: 'M',
    },
  }
  setTimeout(resolve.bind(null, res), 500)
})

export const AuthApi = {
  login: (username, password) => genericAuth,
  loginViaJWT: (jwt) => genericAuth,
}
