
const mongoose = require('mongoose')

// const uri = 'mongodb://localhost/Real-Eastate'
const uri = database_url
mongoose.set('strictQuery', true)

function getConection() {
    mongoose.connect(uri, (err) => {
        if (err) {
            console.log('connection to database is failed');
        } else {
            console.log('connected to database successfully');
        }
    });
    // mongoose.connect(uri)
    
}
 module.exports = getConection;