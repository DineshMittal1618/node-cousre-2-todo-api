 const {SHA256}=require('crypto-js');
 const jwt=require('jsonwebtoken');


 var data={id:10};

 var token=jwt.sign(data,'123abc');
 console.log(token);
 var decode=jwt.verify(token,'123abc');

console.log(decode);






















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
