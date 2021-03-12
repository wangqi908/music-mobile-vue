import { defineAsyncComponent } from 'vue'
export const Recommendation = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "recommendation" */ './recommendation/Recommendation.vue'
  )
)
export const Hot = defineAsyncComponent(() =>
  import(/* webpackChunkName: "hot" */ './hot/Hot.vue')
)
export const Search = defineAsyncComponent(() =>
  import(/* webpackChunkName: "search" */ './search/Search.vue')
)
