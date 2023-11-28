const express = require('express');
const cors = require('cors');
const db = require('mysql2');

const app = express();
const port = 4000;

app.use(express.json());

const connection = db.createConnection({
    host:"localhost",
    user:"root",
    password:"hejsa",
    database:"pokemon"
});

//localhost:4000/all?type=fire
app.get('/all',(req,res)=>{
    const queryParameter = req.query.type;
    console.log(queryParameter);
    res.send(queryParameter);
});

//localhost:4000/new
app.post('/new',(req,res)=>{
    const type = req.body.primaryType;
    const speed = req.body.speed;

    console.log(type);
    console.log(speed);
    res.send("Successful POST request");
});

app.get('*',(req,res) =>{
    res.sendStatus(404);
});

app.listen(port, ()=>{
    console.log("Hey guys we are officially LIVE !!!!");
});