import Vue from 'vue'
import App from './App.vue'
import './assets/css/layout.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import VueCurrencyInput from 'vue-currency-input'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faTrash,
  faAngleRight,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import VueConfirmDialog from 'vue-confirm-dialog'

library.add(faUserSecret, faTrash, faAngleRight, faAngleDoubleRight, faAngleDoubleLeft, faAngleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

Vue.use(VueCurrencyInput)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')