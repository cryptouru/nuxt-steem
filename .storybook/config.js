import { configure } from '@storybook/vue'

// import Vue from 'vue'
// import Vuex from 'vuex' // Vue plugins

// Import your custom components.
// import Logo from '../components/Logo.vue'

// Install Vue plugins.
// Vue.use(Vuex)

// Register custom components.
// Vue.component('logo', Logo)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)