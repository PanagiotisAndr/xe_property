// src/api.js

import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_API_URL + "/search-address";

export const fetchAddresses = async (input) => {
    try {
        const response = await axios.get(API_ENDPOINT, {
            params: {
                input: input
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching addresses:", error);
        throw error;
    }
};
