const express = require('express');
const axios = require('axios');
const router = express.Router();
const db = require('../models/db');


router.post('/save-property', (req, res) => {
    const { area, propertyType, floor, bathrooms, description } = req.body;

    const query = `
    INSERT INTO properties (area, property_type, floor, bathrooms, description)
    VALUES (?, ?, ?, ?, ?)
  `;

    db.query(query, [area, propertyType, floor, bathrooms, description], (err, results) => {
        if (err) {
            console.error('Error saving property to database:', err);
            res.status(500).send('Error saving property to database');
            return;
        }
        res.json({ message: 'Property saved successfully', id: results.insertId });
    });
});



module.exports = router;
