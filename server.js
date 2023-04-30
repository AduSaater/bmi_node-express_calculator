const express = require('express');
const app = express();
//sending a response to the browser
app.get("/", (req, res)=>{
  res.send("Hello World");
});
//create a server
app.listen(3000, ()=>{
  console.log("server running at port 3000");
});
