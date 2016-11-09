var users = require('../../app/controllers/user.controller'),
passport = require('passport');

//perform http operations for signup/signin routes with functions used in app/controllers/user.controller.js
module.exports = function(app){
  app.route('/signup')
  .get(users.renderSignup)
  .post(users.signup,function(){
    failureRedirect:'/'
  });


app.route('/signin')
.get(users.renderSignin)
.post(passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true
}));

app.get('/signout', users.signout);

app.get('/oauth/facebook', passport.authenticate('facebook',{
  failureRedirect: '/',
  scope:'email',
}));

app.get('/oauth/facebook/callback', passport.authenticate('facebook',

 {
  failureRedirect: '/',
  successRedirect: '/'
}));

app.get('/oauth/twitter', passport.authenticate('twitter', {
  failureRedirect: '/'
}));

app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
  failureRedirect: '/',
  successRedirect: '/'
}));


};
