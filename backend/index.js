
// write basic express boilerplate code 
// with express.json() middleware and 

// Filename - index.js

const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
// body{
    // title :string
    // description:string
//}

app.post('/todo',async function (req, res) {
  const  createPayload = req.body;
  const  parsedPayload =createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg:"you send the wrong inputs "
    })
    return;
  }
  //put it in mongodb
   await todo.create({
 title :createPayload.title,
 description:createPayload.description,
 completed:false
  })
  res.json({
    msg:"Todo created successfully "
  })
});
app.get('/todos', async function(req,res){
 const todos = await todo.find({});
 console.log(todos);
 res.json ({
  todos
 })
})
app.put('/completed',async function(req,res){
const updatePayload = req.body;
const parsedPayload = updateTodo.safeParse(updatePayload);
if(!parsedPayload.success){
  res.status(411).json({
    msg:"you send the wrong inputs "
  })
  return;}    
  await todo.updateOne({
    _id:req.body.id 
  },{ completed:true})
  res.json({
    msg:"Todo updated succesfully"
  })
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
