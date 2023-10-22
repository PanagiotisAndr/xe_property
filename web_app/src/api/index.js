import axios from 'axios';


const API_ENDPOINT = process.env.REACT_APP_API_URL + "/search-address";

export const fetchAddresses = async (input) => {
    try {
        // Sending a GET request to the API endpoint with the user input as a parameter
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

const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Response Interceptor
instanceAxios.interceptors.response.use(
    response => {

        return response;
    },
    error => {

        return Promise.reject(error);
    }
);

export default instanceAxios;