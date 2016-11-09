var mongoose = require('mongoose'),
express = require('express'),
router = express.Router(),
Article = mongoose.model('Article');



var getErrorMessage = function(err){
  if(err.errors){
    for (var errName in err.errors){
      if (err.errors[errName].message)
      return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

//server side function to add article to the database
exports.create = function(req, res){
  var article = new Article(req.body);
  article.creator = req.user;
  article.save(function(err){
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }else {
      res.json(article);
    }
  });
};






//list all articles, sorted by date created
exports.list = function(req, res){
  Article.find().sort('-created').populate('creator', 'username').exec(function(err, articles){
    if(err){
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(articles);
    }
  });
};




//get specific id of article
exports.articleByID = function(req, res, next, id){
  Article.findById(id).populate('creator', 'username')
  .exec(function(err, article){
    if (err) return next(err);
    if(!article) return next(new Error('Failed to load article ' + id));
    req.article = article;
    next();
  });
};

//read articles
exports.read = function(req, res){
  res.json(req.article);
};

//serverside function to update article in database
exports.update = function(req, res){
  var article = req.article;

  article.title = req.body.title;

  article.content = req.body.content;

  article.save(function(err){
    if(err){
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};

//serverside function to delete article from database
exports.delete = function(req, res){
  var article = req.article;

  article.remove(function(err){
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(article);
    }
  });
};



//users who are not logged in cannot do anything
exports.hasAuthorization = function(req, res, next){
  if (req.article.creator.id !== req.user.id){
    return res.status(403).send({
      message: 'User is not authorized'
    });
  }
  next();
};
