const mongoose = require('mongoose')


async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
    } catch(err){
        console.log(err)
        console.log("please try to switch to public DNS servers like google.")
    }
}

module.exports = connectDB