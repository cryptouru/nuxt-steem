let steemconnect = require('steemconnect');
let config = require('../config')

let steem = steemconnect.Initialize({
    app: config.auth.client_id,
    callbackURL: config.auth.redirect_uri ,
    scope: ['login','vote', 'comment']
});

module.exports = steem;
