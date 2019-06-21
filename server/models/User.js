var mongoose=require('mongoose');
const validator=require('validator');
const jwt=require('jsonwebtoken');

const _=require('lodash');
var UserSchema=new mongoose.Schema({
  email:
  {
    type:String,
    minlength:1,
    trim:true,
    unique:true,
    required:true,
    validate:{
      validator:(value)=>{
        return validator.isEmail(value);
      },
      message:'{value} is not valid email'
    }},
    password:{
      type:String,
      required:true,
      minlength:6
    },

    tokens:[{access:{
      type:String,
      required:true
    },token:{
      type:String,
      required:true
    }}]

});

UserSchema.methods.toJSON=function(){
  var user=this;
  var userObject=user.toObject();
  console.log('456');
  return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken=function(){
  var user=this;
  var access='auth';
  var token =jwt.sign({_id: user._id.toHexString(),access},'abc123').toString();

  user.tokens=user.tokens.concat([{access,token}]);

    return  user.save().then(()=>{return token;});
};

UserSchema.statics.findByToken=function(token){
  var user =this;
  var decoded;
  try{
    decoded=jwt.verify(token,'abc123');
  }
  catch(e){
    // return new promise((resolve,reject)=>{
    //   reject();

    return Promise.reject();
    }

  return user.findOne({
    '_id':decoded._id,
    'tokens.token':token,
    'tokens.access':'auth'
  });
};

var users=mongoose.model('users',UserSchema);




module.exports={users};
