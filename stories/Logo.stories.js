import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import Logo from '../components/Logo.vue'

storiesOf('Logo', module)
  .add('default', () => ({
    components: { Logo },
    template: '<logo />'
  }))