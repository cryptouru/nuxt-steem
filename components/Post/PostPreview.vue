<template>
  <div>
    <v-card hover>
      <v-card-title>
        <div>
          <h3 class="mb-0">{{ title }}</h3>
          <div class="author">{{ author }}  <span>{{ author_rep }}</span> </div>
        </div>
      </v-card-title>
      <v-img
        :src="img_url"
        aspect-ratio="4" />
      <v-card-title>
        <div>
          <div>{{ snippet }}</div>
          <div class="stats"> <v-btn @click="$emit('vote', root_permlink)" icon class="up-vote" :class="{ voted: voted }"><v-icon>keyboard_arrow_up</v-icon></v-btn> {{ vote_count }} <v-btn icon><v-icon>comment</v-icon></v-btn>{{ comment_count }} <span class="payout">${{ payout }}</span></div>
        </div>
      </v-card-title>

      <!-- <v-card-actions>
        <v-btn flat>Share</v-btn>
        <v-btn flat>Explore</v-btn>
      </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    title: {
      type: String,
      required: true
    },
    snippet: {
      type: String,
      required: true
    },
    img_url: {
      type: String,
      default: ""
    },
    voted: {
      type: Boolean,
      default: false
    },
    author: {
      type: String,
      required: true
    },
    author_rep: {
      type: Number,
      required: true
    },
    payout: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    comment_count: {
      type: Number,
      required: true
    },
    parent_permlink: {
      type: String,
      required: true
    },
    root_permlink: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      required: true
    }
  }
};
</script>

<style scoped>
div {
  font-family: Roboto, Helvetica, sans-serif;
}
.stats {
  margin-top: 16px;
}
.votes {
  margin: -3px 8px;
}
.up-vote {
  border: #41b883 solid 2px;
}
.voted{
  background: #41b883;
  color: white;
}
.author {
  margin-top: 8px;
}
.author span {
  background-color: #41b883;
  padding: 4px;
  border-radius: 6px;
  color: white;
}
.payout{
  margin: 6px 16px;
  font-weight: 700;
  color: #41b883;
}
</style>
