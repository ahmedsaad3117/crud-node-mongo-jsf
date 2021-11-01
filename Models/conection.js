let mongoose = require('mongoose') ;
let URI = 'mongodb+srv://admin:admin@sandbox.de0hw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;'

//mongosh "mongodb+srv://sandbox.de0hw.mongodb.net/myFirstDatabase" --username admin


const connectDB=async()=>{
   await mongoose.connect(URI,{useUnifiedTopology:true , useNewUrlParser: true});
   console.log('db concted ...')
}

module.exports = connectDB;