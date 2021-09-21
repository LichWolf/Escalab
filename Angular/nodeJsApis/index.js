const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'woa-db',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));


//GET all User's
app.get('/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//GET all User's by ID

app.get('/user/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM users  WHERE UserID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//DELETE an User by ID
app.delete('/user/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM users WHERE UserID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully');
        else
            console.log(err);
    })
});


//Insert an User (post)
app.post('/user', (req, res) => {
    let emp = req.body;
    var sql = "SET @UserID = ?;SET @email = ?;SET @clave = ?; CALL UsersAddorEdit(@UserID,@email,@clave);";
    mysqlConnection.query(sql, [emp.UserID, emp.email, emp.clave], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if (element.constructor == Array)
                    res.send('Inserted User id : ' + element[0].UserID);
            });
        else
            console.log(err);
    })
});

//UPDATE an User by ID
app.put('/user', (req, res) => {
    let emp = req.body;
    var sql = "SET @UserID = ?;SET @email = ?;SET @clave = ?; CALL UsersAddorEdit(@UserID,@email,@clave);";
    mysqlConnection.query(sql, [emp.UserID, emp.email, emp.clave], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});