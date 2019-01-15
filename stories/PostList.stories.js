import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from "@storybook/addon-actions"


import PostList from '../components/Post/PostList.vue'

export const posts = [
  {
    title: 'Steem Monsters Kickstarter Project is now Live! 200 SBD CONTEST!',
    snippet: 'Whew! It\'s been a wild ride getting here and we\'re so excited to let you all know... VISIT THE…',
    author: 'steemmonsters',
    author_rep: 71,
    payout: 912.17,
    net_votes: 666,
    comment_count: 123,
    parent_permlink: 'bank',
    permlink: 'the-menzoberranzan-bank-of-neoxian-daily-contracts-2018-08-30',
    url: '/kr/@aaron2020jeju/3datge-kr-gazua',
    img_url: 'https://steemitimages.com/640x480/https://i.imgur.com/wvJ2FWb.png',
    created: new Date(2018, 0, 1, 9, 0)
  },
  {
    title: 'Steem Monsters Kickstarter Project is now Live! 200 SBD CONTEST!',
    snippet: 'Whew! It\'s been a wild ride getting here and we\'re so excited to let you all know... VISIT THE…',
    author: 'steemmonsters',
    author_rep: 71,
    payout: 912.17,
    net_votes: 666,
    comment_count: 123,
    parent_permlink: 'bank',
    permlink: 'the-menzoberranzan-bank-of-neoxian-daily-contracts-2018-08-30',
    url: '/kr/@aaron2020jeju/3datge-kr-gazua',
    img_url: 'https://steemitimages.com/640x480/https://i.imgur.com/wvJ2FWb.png',
    created: new Date(2018, 0, 1, 9, 0)
  },
  {
    title: 'Steem Monsters Kickstarter Project is now Live! 200 SBD CONTEST!',
    snippet: 'Whew! It\'s been a wild ride getting here and we\'re so excited to let you all know... VISIT THE…',
    author: 'steemmonsters',
    author_rep: 71,
    payout: 912.17,
    net_votes: 666,
    comment_count: 123,
    parent_permlink: 'bank',
    permlink: 'the-menzoberranzan-bank-of-neoxian-daily-contracts-2018-08-30',
    url: '/kr/@aaron2020jeju/3datge-kr-gazua',
    img_url: 'https://steemitimages.com/640x480/https://i.imgur.com/wvJ2FWb.png',
    created: new Date(2018, 0, 1, 9, 0)
  },
  {
    title: 'Steem Monsters Kickstarter Project is now Live! 200 SBD CONTEST!',
    snippet: 'Whew! It\'s been a wild ride getting here and we\'re so excited to let you all know... VISIT THE…',
    author: 'steemmonsters',
    author_rep: 71,
    payout: 912.17,
    net_votes: 666,
    comment_count: 123,
    parent_permlink: 'bank',
    permlink: 'the-menzoberranzan-bank-of-neoxian-daily-contracts-2018-08-30',
    url: '/kr/@aaron2020jeju/3datge-kr-gazua',
    img_url: 'https://steemitimages.com/640x480/https://i.imgur.com/wvJ2FWb.png',
    created: new Date(2018, 0, 1, 9, 0)
  }
];


export const methods = {
  vote: action("vote")
};


const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>'
  };
};

storiesOf('PostList', module)
  .addDecorator(paddedList)
  .add('default', () => ({
    components: { PostList },
    template: '<PostList  :posts="posts" @vote="vote"/>',
    data: () => ({ posts: posts }),
    methods
  }))
  .add('loading', () => ({
    components: { PostList },
    template: '<PostList  loading/>'
  }))
  /*.add("voted", () => {
    return {
      components: { PostList },
      template: '<PostList  v-bind="posts" @vote="vote"/>',
      data: () => ({ preview: { ...preview, voted: true } }),
      methods
    };
  })*/
