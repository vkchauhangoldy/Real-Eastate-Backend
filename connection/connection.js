
const mongoose = require('mongoose')

const uri = 'mongodb+srv://vkchauhangoldy:vkchauhangoldy@realeastate.t9ei3ec.mongodb.net/Real-Eastate?retryWrites=true&w=majority'
// const uri = process.env.database_url
mongoose.set('strictQuery', true)
mongoose.connect(uri, { useNewUrlParser: true }
).then(() => {
    console.log("connected to database successfully");
}).catch(() => {
    console.log("failed to connect to database");
});