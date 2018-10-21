import User from './User'

export default {
  state: {
    ...User.state
  },
  mutations: {
    ...User.mutations
  },
  actions: {
    ...User.actions
  }
}