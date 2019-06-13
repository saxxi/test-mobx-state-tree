import { types } from "mobx-state-tree";
// import { CompanyApi } from "../../services/Api";

// const CompanyInfo = types.model('CompanyInfo', {
//   // id: types.reference,
//   name: types.string,
// });

// export const Company = types.model({
//   authToken: types.maybe(types.string),
//   infos: types.maybe(CompanyInfo),
//   state: types.enumeration("State", ["loading", "loaded", "error"])
// })
// .actions(self => {
//   let pendingRequest = null // store the Promise
//   return {
//       afterCreate: () => {
//         self.state = "loading"
//         pendingRequest = CompanyApi.get().then(({data}) => {
//           self.state = "loaded"
//           self.infos = data;
//         })
//       },
//       beforeDestroy: () => {
//         pendingRequest.abort() // <- this is awesome
//       },
//   }
// })

export const Company = types.string
