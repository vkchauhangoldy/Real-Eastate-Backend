const express = require('express')
const bodyparser = require('body-parser')
const cors =require('cors');

//Database Connection
const connect = require('./connection/connection')
// connect()
const propRouter = require('./routes/route');
const routes_signup= require("./routes/signup");
const route_prop= require("./routes/Property");


const app = express()
const port = 2023 ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/reg", routes_signup);
app.use('/', propRouter)
app.use("/", route_prop);

app.get('/', function (req, res) {
    res.send('Hello World')
})


app.listen(port, () => {
    console.log(`server is running at ${port}`);
});