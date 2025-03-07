const { default: mongoose } = require("mongoose")

/*
* Todo{
  title: string,
  description :string
  completed:boolean
}
*/

// moongodbb url handle
// mongodb+srv://0utlier:704708dipayan@cluster0.9or5f.mongodb.net/todos
mongoose.connect('mongodb+srv://0utlier:704708dipayan@cluster0.9or5f.mongodb.net/todos')
const todoSchema = new mongoose.Schema({
  title:String,
  description : String,
completed:{
  type:Boolean,
 default:false 
}
})
const todo = mongoose.model('todos',todoSchema);
module.exports = {
  todo
}