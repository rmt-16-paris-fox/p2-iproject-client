import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const server = axios.create({
  baseURL: 'https://dota2analyzer-h8.herokuapp.com'
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    matchData: {},
    radiant: [],
    dire: [],
    radiantDraft: [],
    direDraft: [],
    draftAnalyzed: {},
    draftComposerEnemy: [],
    composedDraft: {}
  },
  mutations: {
    SET_MATCH_DATA(state, payload) {
      state.matchData = payload;
    },
    SET_RADIANT(state, payload) {
      state.radiant = [...payload.players].splice(0, 5);
    },
    SET_DIRE(state, payload) {
      state.dire = [...payload.players].splice(5, 5);
    },
    SET_RADIANT_DRAFT(state, payload) {
      if (state.radiantDraft.length < 5) state.radiantDraft.push(payload);
    },
    SET_DIRE_DRAFT(state, payload) {
      if (state.direDraft.length < 5) state.direDraft.push(payload);
    },
    SET_REMOVE_RADIANT_DRAFT(state, payload) {
      let idx = null;

      for (let i = 0; i < state.radiantDraft.length; i++) {
        if (payload === state.radiantDraft[i]) idx = i;
      }

      state.radiantDraft.splice(idx, 1);
    },
    SET_REMOVE_DIRE_DRAFT(state, payload) {
      let idx = null;

      for (let i = 0; i < state.direDraft.length; i++) {
        if (payload === state.direDraft[i]) idx = i;
      }

      state.direDraft.splice(idx, 1);
    },
    SET_DRAFT_ANALYZED(state, payload) {
      state.draftAnalyzed = payload;
    },
    SET_DRAFT_COMPOSER_ENEMY(state, payload) {
      if (state.draftComposerEnemy.length < 5)
        state.draftComposerEnemy.push(payload);
    },
    SET_COMPOSED_DRAFT(state, payload) {
      state.composedDraft = payload;
    }
  },
  actions: {
    async fetchMatchData(context, payload) {
      try {
        const response = await server({
          url: `/matches/${payload}`
        });

        context.commit('SET_MATCH_DATA', response.data);
        context.commit('SET_RADIANT', response.data);
        context.commit('SET_DIRE', response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async analyzeDraft(context) {
      try {
        const response = await server({
          url: `/draft/analyzer`,
          data: {
            radiant: context.state.radiantDraft,
            dire: context.state.direDraft
          }
        });

        context.commit('SET_DRAFT_ANALYZED', response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async composeDraft(context) {
      try {
        console.log(context.state.draftComposerEnemy);
        const response = await server({
          url: '/draft/composer',
          method: 'POST',
          data: {
            draft: context.state.draftComposerEnemy
          }
        });

        context.commit('SET_COMPOSED_DRAFT', response.data);
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {}
});
