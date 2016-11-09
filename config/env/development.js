//database url used for development environment and oAuth callbacks

module.exports = {
  db:'mongodb://localhost/articlefeeder',
  sessionSecret:'developmentSessionSecret',
  facebook:{
    clientID:'600145116834144',
    clientSecret: '3c31d49790452b1b8c37a5316dc07c1e',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter:{
    clientID: 'TKwtX5iHydc7spOK5KAyG9FEo',
    clientSecret: 'Cw11bdEnM7odWir2STtvc6t2kVumzXbdJQyijKiQf1yrJh6M8y',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  }

};
