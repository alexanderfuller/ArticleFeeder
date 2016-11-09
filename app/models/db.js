
var	config = require('../../config/config'),
 mongoose = require('mongoose');

//define mongoose connection, switch connection  in production mode
var db = 'mongodb://localhost/articlefeeder';
if(process.env.NODE_ENV === 'production'){
  db = 'mongodb://fulleraj:password@ds029456.mlab.com:29456/articlefeeder';
}





//mongoose connection error checking
mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + db);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(config.db);


  mongoose.connect(config.db);
  // Load the models
  	require('./user');
    require('./article');


	return db;
};
