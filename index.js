
const express = require('express');
const app = express();

const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'dan',
    password : 'dan',
    database : 'crud'
})

app.listen( 3000, (req, res) =>{
    console.log("Connected to backend!!");
})

app.use(express.json())

app.get('/', (req, res) =>{
    res.json("This is some output");

})

app.get('/books',(req,res) =>{
    const q = "SELECT * FROM books"

    db.query(q,(err,data) =>{
        if(err) {
            res.json(err);
        }
        else{
            res.json(data);
        }
    })
})

app.post('/books',(req,res)=>{
    const q = "INSERT INTO books (`title`, `desc`, `cover`) values (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ];
    db.query(q,[values], (err,data)=>{
        if (err) {
            res.json(err);
        }
        else{
            res.json("Data sent to the backend");
        }
    })

})


