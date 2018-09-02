<template>
  <v-layout 
    column 
    justify-center 
    align-center>
    <v-flex 
      xs12 
      sm8 
      md6>
      <h2>Feed</h2>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  fetch(context) {
    console.log(context.app.$steemApi, 'async')
  },
  created () {
    console.log(this.$steemApi, 'created')
  }
}
</script>
