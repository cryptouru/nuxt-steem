<template>
  <div>
    <v-card hover :href="'https://busy.org' + url" target="blank">
      <v-card-title>
        <div>
          <h3 class="mb-0">{{ title }}</h3>
          <div class="author">{{ author }}  <span>{{ author_rep }}</span> </div>
        </div>
      </v-card-title>
      <v-img
        :src="img_url"
        :lazy-src="lazy_img"
        aspect-ratio="4" />
      <v-card-title>
        <div>
          <div>{{ snippet }}</div>
          <div class="stats"> <v-btn @click="$emit('vote', permlink)" icon class="up-vote" :class="{ voted: voted }"><v-icon>keyboard_arrow_up</v-icon></v-btn> {{ net_votes }} <v-btn icon><v-icon>comment</v-icon></v-btn>{{ comment_count }} <span class="payout">${{ payout }}</span></div>
        </div>
      </v-card-title>
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
    net_votes: {
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
    permlink: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      lazy_img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAAD6BAMAAACc8TP+AAAAG1BMVEXMzMyWlpajo6O+vr6cnJy3t7exsbHFxcWqqqoGuZaVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAJF0lEQVR4nO3dzZPbRBrHcb9rjmjiIXMckyzLEVeowHEEW4QjTphijjYc9mrtZjHHeJfs/turfn+61fa8SOAU9f2c7MdWZ0o/tdRqSc5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBPr7h9Xv3tk59P/WfgdzJdlNr556f+SzAYNkFcyULzvmOTY5svCX8IVMBPZKF7wJvS+7hjU+hMBXwuC50DPiuFq25toTMVcCn3pJ0D3suAz+/+Pn5XOuBrUXhIwM3CH6W1aRlZP7xV9EkHfCEKXQOuVYOffrndvdRjrScPbxV90gHPRaFrwCrWZ/rVeB/20QR8Kjrg8vtQ6BhwIXYIem+9fXCr6JMJ+DoUOgZ8JjeXZfPm3YNbRZ+G6flqx4Cb0qV/M/bbDgGfiglYHIQ7Btx02qfh3d69I+BTaTKah7OZQeeAN26nrNXugEzAp9JkdFHKXtcx4H00Yhu5HTYBn4rKqJIH4Y4BL9y4WZu58yQCPhWV0bIUqXQMuIoCHncK+Laaf2oa++X5/DOuTD2KymhUigNn94DFu8KN3+JWb5/Pv/57vFym9IUa/uk9/EwPBEn4MVRGY3kQdlGISMzLlTjD3aueWdnp5mvZXhn14EIvOrFftGP1wlyOeCaWSkp6w5mF61H79FwO96bX5UKcvB4MeBKyLPQWcShg2dNubm5aAbvrxevwtaSk/yh7VeoyXIAUozfcl16Xteh3BwMeh0nIM71PzwZcZXKIA/6HfScuJaYl9UfNXO17H/+TtGHcTQd8VoZL8wcDVv3c9kEzKssGvEjeK3HA/oaecNxPS+qPql3petzeInBvOuBCdI/DAdd+H7rQB8RswPv44qMWBTzyYfovtkrqj/KhX7z1nzLMejgzEN6E7nE4YNXP9VjMTjFnA15lcogCljd82MNCq2RnX/775ie1VPPx5ZvbqozmyHBPJuA6xHI4YNXP9UhWBdYcaHe7ZrGnu91WtqdauowqzYK7XVPd7XYDs3GU335ZvKz8/qBdMhPk/xu40ZdqUB2nWxefcScTsBrRXJnC4YD12lbZrVx/z5wH693t+Y/pP+NbU5/rEfuvbn+QKYXbTMxQa61eLhhlPYbNqGrdXJMJeGL3kv7LmYDtiOjbZDftW1uWbpi9d2e27ZIO2JQql776GmfCD2czWvkR8pGAp6aHzUo52k0bdAfUv0T7ad/awo+tRmJYnZSGPlXd3Cv9aiKvNOO+bEYT32WOBGwnRN764VEuYD/mnctnk1wTRRgqFbaZTGnod99i/mwW3zuG+7EZTcv03otcwEs9Ftv4fWUu4MINrptDcZjycE3MwthZdc51vjQMmS/9p1MCfgyXUZVems8FrCdECr8tZAMO01J2IBw1MRL72aUZ2GVKwzCor/2nY/EX4d5cRsv0uk8uYD0hIm6rywY8+EEkvE6aqMVQeGKWzpSGobMO/QG6IODHcBmNXBrHAtYTInWYFMkHPHgdAr5MmliKeZGROdBmSuLOvaGPn4AfxWXkb4A8GrAai4UzqkMBD/4VJpev4ibkLVsz01CmFLqteumuZBLwY/iMFnbodDRg++DRu3ThlpdV3IVdE3txlXBs/sVMaZjdhgj4MfwKrO1w9WjAdv55my7cVtzahOOTL3k1sTDxZ0qi2xJwR34FntmD8PGA1VlLmFA6EnDT282Ux3XURCkuRRTmYJ4pEXB//Ao0d2ncFbCean7VWjireB22BtGqNM+XRLsE3FFYgRuzezwecBH2uoO7Aja3zUUnX0WSZpktEXCPwgq0B+HjAeuD8La98AF7920CPpWwAu01hOMB64tF6/bCB4xcf7dNjNM0t7kSAfdIrMBKH4SPB6xvzniaWTjPX0gg4FMRK3Clh7DHA16pCC4zC1svXryI3u/tVMehgD/PlQi4R2IFTvTabQcs5wgrl0G6sJWGsIrnx4qydcdWpkTAPRIrUE1TXR0PWDxtkCxsVdGDDXrkdi1aI+A/nMxIzzK3AxbX6WrzNPFFZmFjkaRV22+IVtP74jMlAu6PzGipDsLtgKfhZXNIvdhE1/LaAUdpDZOAq+iJlUMlAu6PzEif1LQDnvmX+pKTOlSv2wsb++Tm5WQXrTaAd/ESuRIB90dmpPNrBzzyL/UWoDr0q/bCxia5D34Zj6Kjz4ubmzf5EgH3J8poYZ4o0K9LP1yq/ZrV+3C1Tz14T9YyuXl5FZ8Hq8/9WfTUtJMpEXB/oozsGEq/DoPblV+z5lr/qjx8V+Uwubd1kdwnUotHl87MxpApEXB/oozsg7j6dRj7VK5kzqP8/e+5gEfxSc/YvXVNjMQzgrXpupkSAfcnyqgQAS/c6e7Ul8xMiE7t0JMNs1JcTRQ3t8ttxG0AdpYrUyLg/sQZ7UPAe3dofOtLG9vXFkeeTWq+ex6mOvatn1Eq/ZBqKnp3UiLg/sQZ1SHglU3R3MiuX7meu3RzE8PoZ+20ZiMov3FvwgNm/rC98Tvkpevd7RIB9ycOeBYCru2R9gs/7vK/A3Dm+tyk/TyY3kT+Y17/UvmjtT+iq938M/dPXRwoEXB/kr2s7646xfnPL143vdaWlm6fGj0onPz2kbnv8rs32+KfP+mXW9fux/qVvnj0fle8LN3mkikRcH+SgFc+4HAZ750tLeQjf3MVlxl1X0UN7svIE1E9Tz6fb1uLmBIB9ycJeOIDDqt9a0ri17TUfng9cN31KmpQ/OBGWfqZ6ZUPWPynLO743SoRcH+SgMM5kU/qwq7ZcPqrD5YqiiITcNyF3RRG7QMOn4efrktLBNyf9EynCqtx4fqgKalOuA3f0nvrVSZg/wNXMsNpCHha2Q//6hdJSwTcnzTgZViNZrV/49ZsJWYh1cmQym6WCXjwVQg4jMA2PmAzuI5/yjApEfAfY/pb9fX741/5qpp/ll6uH/xqO+R8HWrj30rf1vjf1fy7+HdaMiV8uNR/Lzv/5P327m8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8qP4PaVKGz31dzVUAAAAASUVORK5CYII='
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
