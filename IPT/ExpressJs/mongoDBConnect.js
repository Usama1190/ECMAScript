let mongodb = require("mongoose");

async function connectDB() {
    
let newConnection= await mongodb.connect("mongodb://localhost:27017/SE2022");
console.log("MongoDB Connect!")

}

module.exports=connectDB;