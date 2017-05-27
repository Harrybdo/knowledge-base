import Vue from 'vue'
import Vuex from 'vuex'

import alert from './modules/alert'
import anchor from './modules/anchor'
import editor from './modules/editor'
import modalCreatePage from './modules/modal-create-page'
import modalCreateUser from './modules/modal-create-user'
import modalDiscardPage from './modules/modal-discard-page'
import modalMovePage from './modules/modal-move-page'
import pageLoader from './modules/page-loader'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    loadingChange: (state, loadingState) => { state.loading = loadingState }
  },
  actions: {
    startLoading({ commit }) { commit('loadingChange', true) },
    stopLoading({ commit }) { commit('loadingChange', false) }
  },
  getters: {},
  modules: {
    alert,
    anchor,
    editor,
    modalCreatePage,
    modalCreateUser,
    modalDiscardPage,
    modalMovePage,
    pageLoader
  }
})
