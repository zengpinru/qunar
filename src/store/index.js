import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
  city:localStorage.city?localStorage.city:'上海'
};
const mutations={
  changeCityName(state,cityName){
    state.city=cityName;
    localStorage.city=cityName;
  }
};
export default new Vuex.Store({
  state,
  mutations
})
