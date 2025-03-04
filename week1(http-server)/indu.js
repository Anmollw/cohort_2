const express = require("express")
const port = 
const app = express();

let info={}

app.use(express.json());

app.get('/',function(req,res){
  res.send("hello world")
})

app.post('/list1',function(req,res){
  info = req.body
  res.send(`Hello,${info.name}.Your age is ${info.age}`)
})
app.get('/list1',function(req,res){
  if(Object.keys(info).length==0){
    res.send("400 Bad Request")
  }
  else{
    res.send(`Hello,${info.name}.Your age is ${info.age}`)
  }
  })


app.listen(port,function(){
  console.log(`begins ${port}`)
})