var User = require('mongoose').model('User'),
passport = require('passport');

//error messaging for bad register attempts
var getErrorMessage = function(err) {
    var message = '';
  if (err.code) {
  switch (err.code) {
    case 11000:
    case 11001:
    message = 'Username already exists';
    break;
    default:
    message = 'Something went wrong';
   }
  } else {
       for (var errName in err.errors) {
       if (err.errors[errName].message) message = err.errors[errName]. message;
        }
      }
  return message;
};
//display error message for bad login attempt else take them to the home page
exports.renderSignin = function(req, res, next) {
   if (!req.user) {
         res.render('signin', {
          title: 'Sign-in Form',
        messages: req.flash('error') || req.flash('info')
          });
        } else {
            return res.redirect('/');
}
 };
 //display error message for bad register attempt else take them to the home page
  exports.renderSignup = function(req, res, next) {
     if (!req.user) {
        res.render('signup', {
             title: 'Sign-up Form',
             messages: req.flash('error')
              });
             } else {
            return res.redirect('/');
            }
          };

//if user registers with an untaken username save their username to the db, or else display username taken
exports.signup = function(req, res, next) {
   if (!req.user) {
     var user = new User(req.body);
     var message = null;
  user.provider = 'local';
  user.save(function(err) {
         if (err) {
            var message = getErrorMessage(err);
      req.flash('error', message);
     return res.redirect('/#!/userregister');
     }
       req.login(user, function(err) {
       if (err) return next(err);
        return res.redirect('/');
        });
        });
       } else {
          return res.redirect('/');
          }
        };

        //signout users who are logged in
exports.signout = function(req, res) {
   req.logout();
    res.redirect('/');
  };

//save users username who are using a twitter or facebook account to login/register
  exports.saveOAuthUserProfile = function(req, profile, done){
    User.findOne({
      provider:profile.provider,
      providerId: profile.providerId
    }, function(err, user){
      if (err){
        return done(err);
      }else{
        if (!user){
          var possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0]: '') ||profile.fullName;

          User.findUniqueUsername(possibleUsername, null,
             function(availableUsername){
            profile.username = availableUsername;

            user = new User(profile);

            user.save(function(err){
              if(err){
                var message = _this.getErrorMessage(err);
                req.flash('error', message);
                return res.redirect('/');
              }
              return done(err, user);
            });
          });
        }else {
          return done(err, user);
        }
      }
    });
  };

//require users to be logged in to perform actions
  exports.requiresLogin = function(req, res, next){
    if (!req.isAuthenticated()) {
    return res.status(401).send({
      message: 'User is not logged in'
    });
  }
  next();
};
