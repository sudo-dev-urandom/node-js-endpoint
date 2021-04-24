const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var connections = require('../databases/db');

// parse json
app.use(bodyParser.json());

//get product
app.get('/api/products', (req, res) => {
    let sql = "SELECT * FROM product";
    connections.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

app.get('/api/products/:id', (req, res) => {
    let sql = "SELECT * FROM product where product_id="+req.params.id;
    connections.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status":200, "error": null, "response": results }));
    });
});

module.exports = app;