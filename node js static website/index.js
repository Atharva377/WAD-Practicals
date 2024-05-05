
const express = require('express');//create express project
const app = express();//call express command

app.use(express.static('public'))

app.listen(4000,()=>{
    console.log("server is started");
})