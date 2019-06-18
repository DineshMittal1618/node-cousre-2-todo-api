const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect(
  'mongodb://localhost:27017',
  (err,client)=>{
    if(err)
    {
      return console.log('Unable to connect to mongo server');
    }
    console.log('Connected Succesfully');
    const db=client.db('TodoApp');

    db.collection('Todos').find({
      _id:new ObjectID('5d0878cc6057eb080eba9d05')
    }).toArray().
    then(
      (docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
      },

      (err)=>{console.log("Unable to find the data",err);})


      db.collection('Users').find({name:'Dinesh'}).count().then((count)=>{console.log(`${count}`);},(err)=>{console.log('unable to fetch data from Users');})


    client.close();
});
