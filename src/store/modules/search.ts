type actionType = '' | 'SONG_LIST' | 'SUGGEST'
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
    state.actionType = value
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions: {}
}
