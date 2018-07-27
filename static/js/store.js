import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    dailyPageYOffset: 0,
    allPageYOffset: 0
  },
  mutations:{
    setDailyPageYOffset(state, val) {
      state.dailyPageYOffset = val;
    },
    setAllPageYOffset(state, val) {
      state.allPageYOffset = val;
  },
  }
})

export default store