const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected successfully at: ${connect.connection.host}`)
    } catch(err) {
        throw new Error(`Error connecting to database`)
    }
}

module.exports = connectDB