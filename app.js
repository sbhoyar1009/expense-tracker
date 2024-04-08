const express = require("express");
const connectDB = require("./config/db");
const fileupload = require("express-fileupload")
const expense = require("./routes/expense")
const user = require("./routes/user")
var cors = require('cors');

const app = express()
connectDB();

app.use(express.json())
app.use(cors());
app.use(
    fileupload({
      createParentPath: true,
    }),
  );
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,LINK');
  next()
});

app.use('/users',user)
app.use('/expenses',expense)

app.listen(8000,()=>{
    console.log("App is listening")
})