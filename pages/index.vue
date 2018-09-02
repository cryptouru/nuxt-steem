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
    context.store.dispatch('posts/retreive', {topic: 'hot', tag:'steem'})
      .then(() => {
        // console.log(context.store.state.posts.loadedPosts)
      })
  },
  head () {
    return {
      title: 'Yes james',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'description2', name: 'description2', content: 'I am rendered on the server!' }
      ]
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
