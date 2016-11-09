
//display error messages for bad login/register attempts
'use strict';
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
//flash the error message to the index.ejs file
exports.render = function(req, res)
{
  res.render('index', {
    user: JSON.stringify(req.user),
    messages: req.flash('error') || req.flash('info')
  });
};
