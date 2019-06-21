var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

module.exports={mongoose};
mongoose.connect('mongodb://localhost:27017/TodoApp');
