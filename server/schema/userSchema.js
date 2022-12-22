const mongoose = require("mongoose")
// const autoIncrement = require("mongoose-auto-increment")
const schema = mongoose.Schema({
    name:{
        type  : String
    },
    age :{
        type :  Number
    } ,
    email :{
        type :  String
    } ,
    gender :{
        type : String

    } 
    
})


// autoIncrement.initialize(mongoose.connection)
// schema.plugin(autoIncrement.plugin, 'user')

const userModel = mongoose.model("user" , schema)
module.exports = userModel