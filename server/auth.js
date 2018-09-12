let express = require('express');
let steemConnect = require('../helpers/steemconnect')
let router = express.Router()

// GET authenticate a user/redirect to steemconnect. 
router.get('/', (req, res, next) => {
  if (!req.query.access_token ) {
      let uri = steemConnect.getLoginURL();
      res.redirect(uri);
  } else {
    steemConnect.setAccessToken(req.query.access_token);
    steemConnect.me((err, steemResponse) => {
        req.session.authUser = steemResponse.account;
        req.session.access_token = req.query.access_token;
        res.redirect(`/@${req.session.authUser.name}`)
      })
  }
})

// GET `/api/auth/logout` to log out the user and remove it from the `req.session`
router.get('/logout', function (req, res) {
  delete req.session.authUser
  delete req.session.access_token
  res.json({ ok: true })
})

module.exports = router
