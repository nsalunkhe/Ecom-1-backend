require("dotenv").config();

const mongoose = require("mongoose");

//database operations are asynchronous
//to avoid some errors in mongo db we are using these options after url
//here we have created conectDB function which connect us with mongo database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection Fail");
    process.exit(1); //to close node js programme in case of exception thrown
  }
};
module.exports = connectDB