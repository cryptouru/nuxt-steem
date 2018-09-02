import {Client} from 'dsteem'
import Vue from 'vue'

const client = new Client('https://api.steemit.com')
// Accesible on vue components via this.$steemApi
Vue.prototype.$steemApi = client

export default ({ app }) => {
  // This way we can use it in middleware and pages `asyncData`/`fetch`
  // context.app.$steemApi
  app.$steemApi = client
}
