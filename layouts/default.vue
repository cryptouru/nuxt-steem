<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      disable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="tag"
          :key="i"
          v-for="(tag, i) in tags"
          exact
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="tag" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      scroll-off-screen
      app 
      extended>
      <v-toolbar-title v-text="title" />
      <v-spacer/>
      <v-toolbar-items slot="extension">
        <v-toolbar-side-icon @click="drawer = !drawer" />
        <v-btn 
          flat
          router
          :to="item.to + '/' + currentTag"
          :key="i"
          v-for="(item, i) in items"
          exact>
          {{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Hot', to: '/hot' },
          { title: 'Trending', to: '/trending' },
          { title: 'New', to: '/created' }
        ],
        tags: [
          'steem',
          'life',
          'cryptocurrency',
          'comus-fun'
        ],
        title: 'NuxtSteem'
      }
    },
    computed: {
      currentTag() {
        return this.$route.params.tag
      }
    }
  }
</script>
