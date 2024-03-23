// const uri = "mongodb+srv://admin:admin@saurabhasnare.ai9wgxh.mongodb.net/ProctorCode?retryWrites=true&w=majority&appName=saurabhAsnare";

const uri =
  "mongodb+srv://shelkeritish:ritish987@cluster0.iked1va.mongodb.net/ProctorCode";
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(uri);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
