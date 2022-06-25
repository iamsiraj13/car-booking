 
const mongoose  = require('mongoose')


const connectdb=()=>{
     mongoose.connect('mongodb+srv://carbook:carbook@cluster0.4tdkj.mongodb.net/carbook',{
        useUnifiedTopology:true,
        useNewUrlParser:true
     })

     const connection = mongoose.connection;

     connection.on("connected",()=>{
        console.log("Database Connected Successfull")
     })
     connection.on("error",()=>{
        console.log("Something went wrong")
     });
}
 

module.exports = connectdb;