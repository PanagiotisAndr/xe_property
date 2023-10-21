const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Define a POST endpoint for the path '/save-property'
router.post('/save-property', (req, res) => {
    // Destructure properties from the incoming request body
    const { title, placeId, propertyType, area, levels, bathrooms, price, description } = req.body;
    // SQL query string to insert a new row into the 'properties' table
    const query = `
    INSERT INTO properties (title, placeId, propertyType, area, levels, bathrooms, price, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    // Execute the SQL query using the 'query' method of the 'db' object (presumably a database connection)
    // The values in the array will replace the '?' placeholders in the query, in order
    db.query(query, [title, placeId, propertyType, area, levels, bathrooms, price, description], (err, results) => {
        if (err) {
            console.error('Error saving property to database:', err);
            res.status(500).send('Error saving property to database');
            return;
        }
        res.json({ message: 'Property saved successfully', id: results.insertId });
    });
});


module.exports = router;