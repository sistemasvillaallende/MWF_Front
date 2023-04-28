import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'
import { Vue3Mq, MqResponsive } from 'vue3-mq'

import CoreuiVue from '@coreui/vue-pro'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
import axios from 'axios'
import VueStepWizard from 'vue-step-wizard'
import 'vue-step-wizard/dist/vue-step-wizard.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

if (process.env.NODE_ENV == 'development') {
  // axios.defaults.baseURL = 'https://localhost:44337';
  axios.defaults.baseURL = 'https://localhost:7065'
  //axios.defaults.baseURL = '//apibeinfinitus.niufleex.com';
}
//else {
//axios.defaults.baseURL = 'https://apibeinfinitus.niufleex.com';
//}
axios.defaults.headers.common['Access-Control-Allow-Origin'] =
  window.location.origin
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = '*'

const pinia = createPinia()
const app = createApp(App)
app.use(Vue3Mq)
app.use(pinia)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(VueStepWizard)
//app.use(library)
//app.use(FontAwesomeIcon)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('mq-responsive', MqResponsive)
app.config.globalProperties.$idTramite = 0
app.config.globalProperties.$idPaso = 0
app.config.globalProperties.$cuit = ''
app.config.globalProperties.$cuitrepresentado = ''
app.config.globalProperties.$pasoCompleto = []
app.config.globalProperties.$files = []
app.use(createPinia)
app.mount('#app')
