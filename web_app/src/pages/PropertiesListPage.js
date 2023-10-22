import React, { useState, useEffect } from 'react';
import instanceAxios from '../api/index';


const PropertyListPage = () => {
    const [properties, setProperties] = useState([]);
    // Using the useEffect hook to execute code after the component mounts
    useEffect(() => {
        // Sending a GET request to fetch properties from the backend
        instanceAxios.get(`${process.env.REACT_APP_API_URL}/property/get-properties`)
            .then(response => {
                // On successful response, update the 'properties' state with the fetched data
                setProperties(response.data);
            })
            .catch(error => {
                // Logging any error encountered while fetching data from the backend
                console.error("Error fetching properties from backend:", error);
            });
    }, []);
    return (
        <div className="property-listPage mt-3">
            <h1 className="my-3 text-center">List of Properties</h1>
            <div className="container">
                <div className="row">
                    {properties.length > 0 ? (
                        properties.map((property, index) => (
                            <div className="col-md-6 mb-3" key={index}>
                                <div className="text-center p-3 h-100 border">

                                    <h3>{property.title}</h3>
                                    <p className="m-0">{property.description}</p>
                                    <p className="m-0"><b>Area: </b>{property.area}</p>
                                    <p className="m-0"><b>Levels: </b>{property.levels}</p>
                                    <p className="m-0"><b>Bathrooms: </b>{property.bathrooms}</p>
                                    <p className="m-0"><b>Price: </b>{property.price}€</p>

                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center mt-4">
                            <p>No properties available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertyListPage;
