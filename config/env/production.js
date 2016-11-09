//database url for production setting and oAuth callbacks
module.exports = {
  db:'mongodb://fulleraj:vintogluca7@ds029456.mlab.com:29456/articlefeeder',
  sessionSecret:'developmentSessionSecret',
  facebook:{
    clientID:'600145116834144',
    clientSecret: '3c31d49790452b1b8c37a5316dc07c1e',
    callbackURL: 'http://articlefeeder.herokuapp.com/oauth/facebook/callback'
  },
  twitter:{
    clientID: 'TKwtX5iHydc7spOK5KAyG9FEo',
    clientSecret: 'Cw11bdEnM7odWir2STtvc6t2kVumzXbdJQyijKiQf1yrJh6M8y',
    callbackURL: 'http://articlefeeder.herokuapp.com/oauth/twitter/callback'
  }

};
