// src/components/AddressForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddresses } from '../redux/slices/addressSlice';
import { getData } from '../api'; // Assuming you have this function to get addresses

const AddressForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = async (e) => {
        setInput(e.target.value);
        if (input.length >= 3) {
            try {
                const response = await getData(input); // Fetch addresses based on input
                dispatch(setAddresses(response.data)); // Store addresses in Redux
            } catch (error) {
                console.error("Error fetching addresses:", error);
            }
        }
    };

    return (
        <div>
            <h2>Enter Address</h2>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Start typing address..."
            />
            {/* You can add more form fields here as needed */}
            <button type="submit">Submit</button>
        </div>
    );
};

export default AddressForm;
