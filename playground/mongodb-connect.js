// const MongoClient=require('mongodb').MongoClient;
//
// var user={name:'Dinesh',age:25};
//
// var {name}=user;
//
// console.log(name);

const {MongoClient,ObjectID}=require('mongodb');

var x=new ObjectID();

console.log(x);

MongoClient.connect('mongodb://localhost:27017',(err,client)=>
{
  if(err)
  {
      return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongodb server');

   const db=client.db('TodoApp');
  // db.collection('Todos').insertOne(
  //   {
  //     text:'something to do',
  //     completed:false
  //   },
  //   ( err , result)=>{
  //     if(err)
  //     {
  //     console.log('unable to insert',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });
  //


  db.collection('Users').insertOne({
    name:'Dinesh',
    age:21,
    location:'pune'
  },
  (err,result)=>{
    if(err)
    {
      console.log('unable to write to user');
    }
    // console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
  });


  client.close();
});
