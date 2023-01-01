export default {
  namespaced: true,
  state: {
    name: "app-store-global",
    admin: false
  },
  getters: {
    name(state) {
      return state.name;
    },
    getAdmin(state) {
      return state.admin
    }
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
    setAdmin(state, payload) {
      state.admin = payload;
    },
  },
  actions: {
    chagneName({ commit }, newName) {
      commit("setName", newName);
    },
  },
};
