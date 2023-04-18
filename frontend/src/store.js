import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import axios from 'axios';
// import luad from '../data/luad.js'

// const apiRoot = 'https://raw.githubusercontent.com/annapamma/iprofun_site/master/client/data'
const apiRoot = '../data';

export default new Vuex.Store({
  state: {
      genes: [],
    loading: false,
      tableData: [],
      tumor: '',
  },
  mutations: {
      'SET_GENES' (state, genes) {
          Vue.set(
              state,
              'genes',
              genes.split(',').map(el => el.toUpperCase())
          );
      },
    'SET_LOADING'(state, loading) {
        state.loading = loading;
    },
    'SET_TABLE_DATA'(state, data) {
        Vue.set(state, 'tableData', data);
    },
      'SET_TUMOR'(state, tumor) {
        state.tumor = tumor;
      },
  },
  actions: {
      addGenes(store, genes) {
          store.commit('SET_GENES', genes);
      },
    fetchTable(store, { tumor, genes }) {
        store.commit('SET_LOADING', true);
        store.commit('SET_TUMOR', tumor);
        // store.commit('SET_GENES', genes);
      axios.get(
        `${apiRoot}/${tumor}.json`,
      ).then(
        ({ data }) => {
            const tableData = genes.length ? data.filter(el => {
                        return genes.includes(el['Gene'])
                    }) : data;
            store.commit(
                'SET_TABLE_DATA',
                tableData
            );
            store.commit('SET_LOADING', false);
        },
      ).then(
        () => {
        },
      ).catch(
        () => {
          console.log('oh no there was an error!');
        },
      );
    },
  }
})
