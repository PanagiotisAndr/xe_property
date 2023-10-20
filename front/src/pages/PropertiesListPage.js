import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyListPage = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/property/get-properties`)
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error("Error fetching properties from backend:", error);
            });
    }, []);

    return (
        <div>
            {properties.map((property, index) => (
                <div key={index}>
                    <h3>{property.title}</h3>
                    <p>{property.description}</p>
                    {/* Και οτιδήποτε άλλο θέλετε να προβάλλετε */}
                </div>
            ))}
        </div>
    );
};

export default PropertyListPage;
