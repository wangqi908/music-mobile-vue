import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { searchModule } from './modules/index'
import { RootState, AllState } from './interface'

export const key: InjectionKey<Store<RootState>> = Symbol('vuex')

export const store = createStore<RootState>({
  state: {},
  modules: {
    searchModule
  }
})

// define your own `useStore` composition function
export function useStore<T = AllState> () {
  return baseUseStore<T>(key)
}
