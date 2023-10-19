const express = require('express');
const axios = require('axios');
const router = express.Router();

const EXTERNAL_API_ENDPOINT = "https://4ulq3vb3dogn4fatjw3uq7kqby0dweob.lambda-url.eu-central-1.on.aws/";

router.get('/search', async (req, res) => {
    try {
        const { input } = req.query;
        const response = await axios.get(EXTERNAL_API_ENDPOINT, {
            params: { input }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching addresses from external API:", error);
        res.status(500).json({ error: "Failed to fetch addresses" });
    }
});

module.exports = router;
