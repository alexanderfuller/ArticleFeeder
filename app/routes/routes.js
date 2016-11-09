var users = require('../../app/controllers/user.controller'),
articles = require('../../app/controllers/articles.controller');



//perform http operations with functions used in app/controllers/articles.controller.js based on url route

module.exports = function(app) {
  app.route('/api/articles')
  .get(articles.list)
  .post(users.requiresLogin, articles.create);



  app.route('/api/articles/:articleId')
  .get(articles.read)
  .put(users.requiresLogin, articles.hasAuthorization, articles.update)
  .delete(users.requiresLogin, articles.hasAuthorization, articles.delete)




  app.param('articleId', articles.articleByID);

};
