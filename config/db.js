const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/expense-manager", {
      useNewUrlParser: true,

      useUnifiedTopology: true
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Error",err);
    process.exit(1);
  }
}

module.exports = connectDB;