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
      <post-list :posts="loadedPosts" :loading="loading" />
    </v-flex>
  </v-layout>
</template>

<script>
import PostList from '@/components/Post/PostList'
export default {
  components: {
    PostList
  },
  fetch(context) {
    let topic = context.params.sortBy || 'hot'
    let tag = context.params.tag || null
    return context.store.dispatch('posts/retreive', {topic, tag})
  },
  head () {
    return {
      title: 'NUXTSTEEM',
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
  },
  computed: {
    loadedPosts() {
      return this.$store.getters['posts/loadedPosts']
    },
    loading() {
      return this.$store.getters['posts/loadedPosts'].length === 0
    }
  }
}
</script>
