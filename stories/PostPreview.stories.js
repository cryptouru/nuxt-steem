import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from "@storybook/addon-actions"


import PostPreview from '../components/Post/PostPreview.vue'

export const preview = {
  title: 'The Menzoberranzan Bank of Neoxian: daily contracts: 2018-08-30',
  snippet: 'The Bank of Neoxian shall loan the sum of 120 steem to @owner99. He promises to repay 135 steem. He shall p...',
  author: 'neoxian',
  author_rep: 68,
  payout: 12.17,
  net_votes: 19,
  comment_count: 19,
  parent_permlink: 'bank',
  root_permlink: 'the-menzoberranzan-bank-of-neoxian-daily-contracts-2018-08-30',
  url: '/kr/@aaron2020jeju/3datge-kr-gazua',
  img_url: 'https://steemitimages.com/0x0/https://userscontent2.emaze.com/images/20793e54-4ec0-4009-91c3-fb135c1e4fcb/471794c96ca375908b6f64336e5a6019.jpg',
  created: new Date(2018, 0, 1, 9, 0)
};


export const methods = {
  vote: action("vote")
};


storiesOf('PostPreview', module)
  .add('default', () => ({
    components: { PostPreview },
    template: '<PostPreview  v-bind="preview" @vote="vote"/>',
    data: () => ({ preview }),
    methods
  }))
  .add("voted", () => {
    return {
      components: { PostPreview },
      template: '<PostPreview  v-bind="preview" @vote="vote"/>',
      data: () => ({ preview: { ...preview, voted: true } }),
      methods
    };
  })
