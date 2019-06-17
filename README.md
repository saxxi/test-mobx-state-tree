# MobX State Tree workbench

# Why I think MobX State Tree is still a valid choice

Besides the issues it presented I believe it still has some good potential:
  - Uses paradigms React introduced (eg. `Component` pattern: modify only subtrees, create reusable code, ...)
  - Is updated regularly
  - Helps shorten code up making it easier to reason about it
  - Now that we have `React Hooks` and `Context Api` we don't need too many stores

# Q: How we can scale with MobX State Tree?

A: Use inject!

The following code could benefit from improvements:
- it's difficult to test as we're forced to test the app as a whole
- uses "props drilling" technique which makes code difficult to read and refactoring hard

```
@inject('appStore')
export class MyAnyPage extends React.Component<IPropTypes> {
  ...
  <MyWizard
    campaignsStore={this.store.campaignsStore}
    wizardStore={this.store.wizardStore}
    identitiesStore={this.store.identitiesStore}
    userStore={this.props.appStore.userStore}
  />
}
```

A better approach:

```
AppStore = types.model({
  currentUser: UserStore,
})

export const UserStore
...

# Then
@inject('auth')
@inject('candiesStore')
export class CandiesPage extends React.Component<IPropTypes> {
  console.log(this.props.auth.currentUser.name);
  console.log(`You have ${this.props.candiesStore.availableCandies.length} candies.`);
}
```

# What's the equivalent in MST

```
# All this is in one place 🙏
const Company = types.model('Company', {
  infos: ...,
  state: types.enumeration("State", ["loading", "loaded", "error"])
})
.actions(self => {
  let pendingRequest = null // store the Promise
  return {
      afterCreate: () => {
        self.state = "loading"
        pendingRequest = CompanyApi.get().then(({data}) => {
          self.state = "loaded"
          this.infos = data;
        })
      },
      beforeDestroy: () => {
        pendingRequest.abort() // <- this is awesome
      },
  }
})

# Then we just use the component
@inject('Company')
export class MyPagePage extends React.Component { // No props!
  return <div>
    {this.props.Company.state == 'loading' && <div>Loading...</div>}
    {this.props.Company.state == 'error' && <div>Some error occured while fetching your data...</div>}
    {this.props.Company.state == 'loaded' && <div>Company infos: {this.props.Company.infos}</div>}
  </div>;
}
```

# Tough one: why not Redux?

The following simple example is taken from our example but it's similar to what I also would have done:

```
# 1. You'll put your constants somehere:
export const FETCH_COMPANY = 'FETCH_COMPANY';

# 2. In another file you'll declare the props:
interface IPropTypes {
  fetchCompany: (companyId: number) => void;
}

# 3. You'll need to call in for saga:
function* fetchCompany(action: any) {
  const company: Company = yield call(CompaniesApiService.get, action.payload);
  yield put(setCompany(company));
};

export const sagas = [
  takeLeading(CompanyActions.FETCH_COMPANY, fetchCompany),
];

# 4. Somehere else you'll create the action:
const setCompany = (company: Company) => ({ type: CompanyActions.SET_COMPANY, payload: company });

# 5. Ops, now we need to set that constant!
export const SET_COMPANY = 'SET_COMPANY';

# 6. Declare the action (notice how this somehow collides with step n.3):
const fetchCompany = (companyId: number) => ({ type: CompanyActions.FETCH_COMPANY, payload: companyId });

# 7. Then kick the company fetch action:
public componentWillReceiveProps(nextProps: IPropTypes) {
  if (this.props.user !== nextProps.user && !this.props.company) {
    this.props.fetchCompany(nextProps.user.companyId);
  }
}
```

Possible issues using Redux:

- A lot more code is required to achieve the same things as MST
- While it's relatively easy to follow there is a lot of boiler plate and everything a bit too broken down
- Changing the `fetchCompany` method requires to change at least 3-4 files in several points

If we go in this direction we'd either need to pause all development to refactor everything to Redux or we need to keep for some time two stores (Redux and the now legacy MST) which can lead to weird code when the two have to work together.

Personally I think MST is a viable option if has some flaws:

- Has a very little community (although is growing)
- There is little documentation
- Difficult to find examples of large, scalable codebases <sup>1</sup>

We often find ourself in a codebase where there is something we don't like anymore (HAML, CoffeeScript, jQuery to name a few) but from my experience large refactoring are hard and we should really consider the benefits of moving and if we cannot fix what we already have.

Notes:

- Note<sup>1</sup>: here is the material I've read on this topic
  - https://github.com/EQuimper/InStore-a-React-Native-E-Commerce-with-a-Restful-API-in-NodeJS
    - in-depth example
  - https://www.youtube.com/watch?v=gaxx2CF6L4s
    - how to model `Authentication` and `currentUser`
  - https://learnwhileyoupoop.com/state/how-mobx-state-tree-makes-mobx-scale
    - differences between `Redux` and `MST`
  - https://github.com/mweststrate/react-mobx-shop/tree/7_superstore/src/stores
  - https://spectrum.chat/mobx-state-tree/general/should-types-optional-handle-a-null-snapshot-value~99d64000-b267-4796-afe1-5f980b5c951a
  - https://medium.com/mr-frontend-community/mobx-state-tree-a-step-by-step-guide-for-react-apps-e65716a219d2
  - http://www.palador.com/2017/09/19/creating-mobx-state-tree-store-react/
  - https://www.freecodecamp.org/news/how-to-build-a-state-based-router-using-react-and-mobx-state-tree-e91b2b8e8d79/
