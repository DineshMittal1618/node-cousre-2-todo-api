 const {SHA256}=require('crypto-js');
 const jwt=require('jsonwebtoken');
 const bcrypt=require('bcryptjs');

 var password='123abc!';

 bcrypt.genSalt(10,(err,salt)=>{
   bcrypt.hash(password,salt,(err,hash)=>{
     console.log(hash);
   });
 });


 bcrypt.compare('123!',hashedPassword,(err,res)=>{
var hashedPassword='$2a$10$x5UrjDwIKIy8X9DuHzud8.PNaB4kiQDSiGPSpYzboV2Nb0y7oJfSq';
  console.log(res);
});





































//  var data={id:10};
//
//  var token=jwt.sign(data,'123abc');
//  console.log(token);
//  var decode=jwt.verify(token,'123abc');
//
// console.log(decode);
//
//
// var message='i am user number 3';
//
// var hash=SHA256(message).toString();
//
//
// console.log(`message:${message}`);
// console.log(`Hash Function:${hash}`);
//
//
// var data={id:4};
//
// var token={
//   data,
//   hash:SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// token.data.id=5;
// token.hash=SHA256(JSON.stringify(token.data) ).toString();
//
// var resulthash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
//
// if(resulthash===token.hash)
// {
//   console.log('Data was not changed');
// }
// else {
//   {console.log('Data Was Changed');}
// }
