let config = {
  auth: {
      client_id: 'dummy.app',
      redirect_uri: 'http://localhost:3000/api/auth'
  },
  session: {
      secret: 'supersecretsessionhere'
  }
};

module.exports = config;
