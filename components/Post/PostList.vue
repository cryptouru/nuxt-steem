<template>
  <div>
    <v-card class="loading-item" v-if="loading" v-for="(n, index) in 5" :key="index">
      <div class="glow-title">
        loading title
      </div>
      <div class="glow-text">
        <span>Loading</span> <span>cool</span>
      </div>
      <div class="glow-box" />
      <div class="glow-title">
        loading title
      </div>
      <div class="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </div>
    </v-card>
    <div v-if="noPosts && !this.loading">
      There are no posts for this tag
    </div>
    <div v-if="showPosts">
      <post-preview 
        class="post-preview"
        v-for="(post, index) in posts" 
        :key="index" 
        v-bind="post" 
        @vote="$emit('vote', $event)"
      />
    </div>
  </div>
</template>

<script>
import PostPreview from "./PostPreview"
export default {
  name: "PostList",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    PostPreview
  },
  created () {
    console.log(this.posts)
    console.log(this.noPosts)
    console.log(this.showPosts)
  },
  computed: {
    noPosts() {
      return this.posts.length === 0;
    },
    showPosts() {
      return !this.loading && !this.noPosts;
    }
  }
};
</script>

<style scoped>
.post-preview {
  margin-top: 10px;
}
.loading-item .glow-box, .loading-item .glow-text span, .loading-item .glow-title {
    margin: 16px 0;
    animation: glow 1.5s ease-in-out infinite;
    background: #eee;
    color: transparent;
    cursor: progress;
}
.loading-item .glow-box {
    width: 100%;
    height: 120px;
    display: block;
}
.loading-item {
    width: 100%;
    background: white;
    line-height: 1rem;
    padding: 16px;
    margin-bottom: 32px; 
}
</style>
