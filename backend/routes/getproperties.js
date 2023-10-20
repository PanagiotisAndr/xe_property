const express = require('express');
const db = require('../models/db');
const app = express();



app.get('/get-properties', (req, res) => {
    let sql = 'SELECT * FROM properties';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = app;