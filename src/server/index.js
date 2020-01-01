const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_FROM_TODOS = 'SELECT * FROM todos';

app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "todos"
});

connection.connect(err => {
    if(err){
        return err
    }
});

app.use(cors());

app.get('/', (req, res) => {
    connection.query(SELECT_ALL_FROM_TODOS, (err, result) => {
        if(err){
            return res.send(err)
        }else{
            return res.json({
                data: result
            })
        }
    })
})

app.post('/add', (req, res) => {
    const { text } = req.query;
    const INSERT_TODOS = `INSERT INTO todos (text) VALUES('${text}')`;
    connection.query(INSERT_TODOS, (err, result) => {
        if(err){
            return res.send(err);
        }else{
            return res.send("successfully added todo");
        }
    })
})

app.listen(4000, () => {
    console.log('listening on port 4000');
})