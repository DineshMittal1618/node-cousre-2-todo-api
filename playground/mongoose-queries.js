const{mongoose}=require('./../server/db/mongoose');
const{users}=require('./../server/models/User');

var id='5d08c2b7eede3e0f8c00d308';

users.findById(id).then((doc)=>{
  // if(!doc)
  // {
  //   return console.log('Id not found');
  // }
  console.log('User',doc);
})
