const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.post('/save-property', (req, res) => {
    const { title, placeId, propertyType, area, levels, bathrooms, price, description } = req.body;

    const query = `
    INSERT INTO properties (title, placeId, propertyType, area, levels, bathrooms, price, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

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