<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
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
          :to="item.to"
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
    <v-footer
      app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        title: 'NuxtSteem'
      }
    }
  }
</script>
