
//article form properties and input requirements/types

var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },

  title:{
    type:String,
    default:'',
    trim:true,
    required: 'Title cannot be blank',
    validate: [
        function(title) {
    return title && title.length < 55;
  }, 'Title can be no longer then 55 characters'
],
  },
  category: {
    type:String,
    default:'',
    trim:true,
    required:'Category must be selected'
  },
  content:{
    type:String,
    default:'',
    trim:true,
    validate: [
        function(content) {
    return content && content.length < 5000;
  }, 'Article can be no longer then 5000 characters'
]
  },

  creator:{
    type: Schema.ObjectId,
    ref:'User'
  },
  author:{
    type:String,
    required:'Author cannot be blank',
    validate: [
        function(author) {
    return author && author.length < 50;
  }, 'Author name can be no longer then 50 characters'
]
  }

});


mongoose.model('Article', ArticleSchema);
