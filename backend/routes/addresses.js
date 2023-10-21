const express = require('express');
const axios = require('axios');
const router = express.Router();
// Defining an external API endpoint URL
const EXTERNAL_API_ENDPOINT = "https://4ulq3vb3dogn4fatjw3uq7kqby0dweob.lambda-url.eu-central-1.on.aws/";
// Defining a GET route handler for the '/search' path
router.get('/search', async (req, res) => {
    try {
        // Extracting the 'input' parameter from the query string
        const { input } = req.query;
        // Making a GET request to the external API with the provided input
        const response = await axios.get(EXTERNAL_API_ENDPOINT, {
            params: { input }
        });
        // Sending the fetched data from the external API back to the client
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching addresses from external API:", error);
        res.status(500).json({ error: "Failed to fetch addresses" });
    }
});

module.exports = router;