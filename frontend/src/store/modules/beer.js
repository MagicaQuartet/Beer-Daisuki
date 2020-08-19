import axios from "axios";

const state = {
  list: [],
};

const getters = {
  getList: function(state) {
    return state.list;
  },
};

const mutations = {
  setList: function(state, payload) {
    state.list = payload;
  },
};

const actions = {
  loadList: function({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/beer/list")
        .then((res) => commit("setList", res.data))
        .then(() => resolve());
    });
  },
  addBeer: function({ commit, state, dispatch }, beer) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/beer/new", beer)
        .then(() => dispatch("loadList"))
        .then(() => resolve());
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
