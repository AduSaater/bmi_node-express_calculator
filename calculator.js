const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

//sending post request
app.post("/", (req, res)=>{
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is: " + result);
});
//bmicalculator
app.get("/bmicalculator", (req, res)=>{
  res.sendFile(__dirname + "/bmicalculator.html");
});
//bmicalculator calculation
app.post("/bmicalculator", (req, res)=>{
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.weight);
  var bmi = w / (h * h);
  res.send("Your BMI is: " + bmi);
})

app.listen(3000, ()=>{
  console.log("server running at port 3000");
});
