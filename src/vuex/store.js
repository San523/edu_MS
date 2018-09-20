import Vue from 'vue';
import Vuex from 'vuex';
import actions from './api';

Vue.use(Vuex);

export default new Vuex.Store({ //this.$store.state.xxx;
  actions,
  state: {
  	text:"nihao"
  },
  getters:{},
  mutations:{},
});
