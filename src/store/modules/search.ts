type actionType = '' | 'SEARCH' | 'SUGGEST'
interface State {
  searchValue: string;
  actionType: actionType;
}
const state: State = {
  searchValue: '',
  actionType: ''
}
const mutations = {
  changeSearch (state: State, value: string) {
    state.searchValue = value
  },
  changeActionType (state: State, value: actionType) {
    console.log(value)
    state.actionType = value
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions: {}
}
