const express = require("express");
const connectDB = require("./config/db");
const expense = require("./routes/expense")
const user = require("./routes/user")
var cors = require('cors');

const app = express()
connectDB();

app.use(cors());
app.use(express.json());
app.use('/users',user)
app.use('/expenses',expense)

app.listen(8000,()=>{
    console.log("App is listening")
})