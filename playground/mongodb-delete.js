var {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err)
  {
  return console.log('unable to connect to the server');
  }
  console.log('Connected Succesfully');
  const db=client.db('TodoApp');
  // db.collection('Todos').deleteMany({name:'Eat Lunch'}).then((result)=>{console.log(result);})

  db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{console.log(result);})

  db.collection('Users').deleteOne({_id:new ObjectID('5d07884d225ce3288864f742')}).then((result)=>{console.log(result);})
  client.close();
})
