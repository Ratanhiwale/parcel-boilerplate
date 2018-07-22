const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.get('/api/getlist',(req,res)=>{
res.json([{
    name:"Mahesh",
    age:"23"
},
{
    name:"Ratan",
    age:"23"
}])
})




app.listen(4321);