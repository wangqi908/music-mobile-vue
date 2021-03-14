interface State {
  searchValue: string;
}
export default {
  namespaced: true,
  state: {
    searchValue: ''
  },
  mutations: {
    changeSearch (state: State, value: string) {
      state.searchValue = value
    }
  },
  actions: {}
}
