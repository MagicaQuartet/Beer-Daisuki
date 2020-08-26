import axios from "axios";

const state = {
  userID: null,
  username: null,
};

const getters = {
  getUsername: function(state) {
    return state.username;
  },
};

const mutations = {
  setUserInfo: function(state, payload) {
    state.userID = payload.userID;
    state.username = payload.username;
  },
  resetUserInfo: function(state) {
    state.userID = null;
    state.username = null;
  },
};

const actions = {
  validateUser: function({ commit, state }, { username, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/auth/signin", {
          username,
          password,
        })
        .then((res) => {
          if (res.data.success) {
            commit("setUserInfo", res.data.user);
            resolve(state.username);
          } else {
            reject(new Error(res.data.message));
          }
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  },
  signOut: function({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post("/api/auth/signout").then((res) => {
        commit("resetUserInfo");
        resolve();
      });
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
