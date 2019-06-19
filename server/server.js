var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/Todo');
var {users}=require('./models/User');
var {ObjectID}=require('mongodb');
var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

var todo=new Todo({
  text:req.body.text
});

todo.save().then((doc)=>{res.send(doc);},(e)=>{res.status(400).send(e);})

})


app.post('/user',(req,res)=>{

  var todo=new Todo({
    text:req.body.text
  })

  todo.save().then((doc)=>{res.send(doc);},(e)=>{res.send(e);})
});


app.get('/todos',(req,res)=>{
  Todo.find().then((doc)=>{res.send(doc);},(e)=>{res.send(e);})
});


app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(400).send();
  }

  Todo.findById(id)
  .then((todo)=>{
    if(!todo)
    {
      return res.stutus(400).send();
    }
    res.send(todo);
  })
  .catch((e)=>{res.status(400).send();})

});

app.listen(3000,()=>{
  console.log('Ready to listen on port 3000');
});














































// //
// //
// //
// //
// // // var newTodo=new Todo({text:'cook dinner'});
// //
// // // var newTodo=new Todo({text:'Done Homework',completed:true,completedAt:12.8})
// //
// // var newTodo=new Todo({text:'Edit the vedio'})
// //
// // newTodo.save().then((doc)=>{console.log('Saved todo',doc);},(e)=>{'unable to save todo'});
//
//
//
//
//
// var newUser=new User({email:"  dinesh.mittal@gmail.com  "});
//
//
// newUser.save().then((docs)=>{console.log('Saved user data',docs);},(err)=>{console.log('cannot save user data');});
