import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import { ClientTable } from 'vue-tables-2';
import TableComponent from 'vue-table-component';
import Buefy from 'buefy'
import VModal from 'vue-js-modal'
import 'buefy/dist/buefy.css'

Vue.use(VModal);
Vue.use(Buefy);
Vue.use(TableComponent);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
