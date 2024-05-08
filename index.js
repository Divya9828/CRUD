require('dotenv').config()
const body_parser=require('body-parser')

const express=require('express')
const app=express();
const cors=require('cors')

const corsOptions = {
    origin: 'http://localhost', // Allow requests from example.com
    methods: 'GET,POST,PUT,DELETE', // Allow only GET and POST requests
    allowedHeaders: 'Content-Type,Authorization' // Allow only specific headers
  };

app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(cors(corsOptions))
app.set('view engine', 'ejs');

const routerconnection=require('./Routes/crud')

app.use('/',routerconnection)

app.listen(process.env.PORT,()=>{
    console.log("server running on port ",process.env.PORT)
})
