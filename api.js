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
    password: process.env.psw,
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

//localhost:3000/new
app.post('/new',(req,res)=>{
    const name = req.body.name;
    const primary = req.body.primary;
    const q = `insert into pokemon (name, primary_type) values("${name}", "${primary}");`;
    connection.query(q, (error, results)=>{
        res.send(results);
    })
});

app.post('/hp',(req,res)=>{
    const pokedex_number = req.body.pokedex_number;
    const hp = req.body.hp;

    const q = `UPDATE pokemon set hp = ${hp} WHERE pokedex_number = ${pokedex_number}`;
    connection.query(q, (error, results)=>{
        res.send(results);
    })
});


app.get('*',(req,res) =>{
    res.sendStatus(404);
});

app.listen(port, ()=>{
    console.log("Hey guys we are officially LIVE !!!!");
});