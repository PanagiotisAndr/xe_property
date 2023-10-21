const express = require('express');
const db = require('../models/db');
const app = express();

// Define a GET endpoint for the path '/get-properties'
app.get('/get-properties', (req, res) => {
    // SQL query string to fetch all rows from the 'properties' table
    let sql = 'SELECT * FROM properties';
    // Execute the SQL query using the 'query' method of the 'db' object (presumably a database connection)
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = app;