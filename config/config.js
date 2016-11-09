//configure env/development.js or env/production.js based on enviroment set
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
