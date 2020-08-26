import Vue from "vue";
import Vuex from "vuex";
import beer from "./modules/beer";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    beer,
    user,
  },
});
