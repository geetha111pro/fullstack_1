//creating schema (structure) for user

var mbd=require('mongoose')
var userSchema=mbd.Schema({
    firstName : String,
    lastName : String,
    email: String,
    password: String
})
var user_schema =mbd.model("users",userSchema)

module.exports=user_schema