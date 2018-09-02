import remark from 'remark'
import strip from 'strip-markdown'
import rmLinks from 'remark-unlink'
import utils from './utils'

const posts = {
  shape(posts) {
    for(let post of posts) {
      // console.log(post)
      try {
        post.json_metadata = JSON.parse(post.json_metadata)
        if(post.json_metadata.image)
          post.img_url = post.json_metadata.image[0]
      } catch (err) {
        console.log(err, 'Post JSON Error')
      }
      // console.log(post.body)
      post.payout = this.calculateRewards(post)
      post.snippet = this.createSnippet(post.body)
      post.author_rep = utils.calculateRep(post.author_reputation)
      post.comment_count = post.replies.length
      post.created = new Date(post.created)
    }
    return posts
  },
  calculateRewards(post) {
    let pendingInt = +post.pending_payout_value.replace(' SBD', '')
    let curatorInt = +post.curator_payout_value.replace(' SBD', '')
    let authorInt = +post.total_payout_value.replace(' SBD', '')
    return pendingInt + curatorInt + authorInt
  },
  createSnippet(body) {
    let snippet
    remark()
      .use(rmLinks)
      .use(strip)
      .process(body, function(err, file) {
        if (err) throw err
        snippet = stripLinks(String(file)).substring(0, 100)
      })
    return snippet
  }
}

// Created to solve remark bug adding &#x3A;
var urlRegex =/(\b(https?|ftp|file)(:|&#x3A;)\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
function stripLinks(text) {
  return text.replace(urlRegex, '')
}

export default posts