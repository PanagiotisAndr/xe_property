// src/components/PropertyAdForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddresses } from '../redux/slices/addressSlice';
import axios from 'axios';

const PropertyAdForm = () => {
    const [input, setInput] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [floor, setFloor] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [description, setDescription] = useState('');
    const [addresses, setLocalAddresses] = useState([]);
    const dispatch = useDispatch();

    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);

        if (inputValue.length >= 3) {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/addresses/search?input=${inputValue}`);
                if (response.data && Array.isArray(response.data)) {
                    setLocalAddresses(response.data);
                    dispatch(setAddresses(response.data));
                } else {
                    console.error("Unexpected response format from the Node.js server.");
                }
            } catch (error) {
                console.error("Error fetching addresses from Node.js server:", error);
            }
        } else {
            setLocalAddresses([]); // Clear the addresses if input length is less than 3
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const propertyData = {
            area: input,
            propertyType: propertyType,
            floor: floor,
            bathrooms: bathrooms,
            description: description
        };

        axios.post(`${process.env.REACT_APP_API_URL}/property/save-property`, propertyData)
            .then(response => {
                console.log(response.data);
                // Εδώ μπορείτε να ενημερώσετε τον χρήστη ότι το ακίνητο αποθηκεύτηκε επιτυχώς
            })
            .catch(error => {
                console.error("Error saving property to backend:", error);
            });
    };





    return (
        <div>
            <h2>Create Property Ad</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Area:</label>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Start typing address..."
                        list="addresses"
                        required
                    />
                    <datalist id="addresses">
                        {addresses.map((address, index) => (
                            <option key={index} value={address.mainText} data-id={address.placeId} />
                        ))}
                    </datalist>
                </div>
                <div>
                    <label>Property Type:</label>
                    <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} required>
                        <option value="">Select Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        {/* Add more types as needed */}
                    </select>
                </div>
                <div>
                    <label>Floor:</label>
                    <input type="number" value={floor} onChange={(e) => setFloor(e.target.value)} required />
                </div>
                <div>
                    <label>Bathrooms:</label>
                    <input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PropertyAdForm;
