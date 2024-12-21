let mongodb= require("mongoose");

let studentSchema=mongodb.Schema({    
    full_name: String,
    email: String,
    phone: String,
    birth_date: String,
    gender: String,
    address: String,
    address_line2: String,
    country: String,
    city: String,
    region: String,
    postal_code: String});

    module.exports=studentSchema;