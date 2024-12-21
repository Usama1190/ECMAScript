let mongodb = require("mongoose");
let studentSchema =  require('./Schema');

let studentModel = mongodb.model("student",studentSchema);

module.exports= studentModel;