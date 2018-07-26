import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    pageYOffset: 0
  },
  mutations:{
    setPageYOffset(state, val) {
        state.pageYOffset = val;
    }
  }
})

export default store