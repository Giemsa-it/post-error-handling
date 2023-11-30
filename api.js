const express = require('express');
const cors = require('cors');
const db = require('mysql2');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connection = db.createConnection({
    host:"localhost",
    user:"root",
    password:"hejsa",
    database:"pokemon"
});

//localhost:4000/
app.get('/all',(req,res)=>{
    const queryParameter = req.query.type;
    const q = "SELECT * FROM pokemon";
    connection.query(q, (error, results)=>{
        res.send(results);
    })
});

//localhost:4000/new
app.post('/new',(req,res)=>{
    const type = req.body.name;
    const speed = req.body.primary;

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