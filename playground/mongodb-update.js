var {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if (err) {
      return console.log('unable to connect to the server');
  }
  console.log('Connected Succesfully');
  const db=client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5d0899346057eb080ebaa102')},{$set:{completed:true}},{retrunOriginal:false}).then((result)=>{console.log(result);})

db.collection('Users').
findOneAndUpdate({_id:new ObjectID('5d07883bdfb1161e402087aa')},{$set:{name:'Mohit'},$inc:{age:1}},{retrunOriginal:false}).
then((result)=>{console.log(result);})
  client.close();
})
