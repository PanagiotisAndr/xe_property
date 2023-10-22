import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddresses } from '../../redux/slices/addressSlice';
import instanceAxios from '../../../src/api/index';
import './PropertyAdForm.scss';
import get from 'lodash/get';
import { showModal } from '../../redux/slices/modalActions';


const PropertyAdForm = () => {

    // Define states for form fields and utilities
    const [title, setTitle] = useState('');
    const [input, setInput] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [selectedItem, setSelectedItem] = useState({});
    const [addresses, setLocalAddresses] = useState([]);
    const [price, setPrice] = useState('');
    const [levels, setLevels] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();  // for dispatching actions to redux
    const [cache, setCache] = useState({});  // Cache for storing addresses

    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);

        // Make an API call if the input value is at least 3 characters long
        if (inputValue.length >= 3) {
            // Check if the result exists in the cache            
            if (cache[inputValue]) {
                setLocalAddresses(cache[inputValue]);
                dispatch(setAddresses(cache[inputValue]));
            } else {
                try {
                    const response = await instanceAxios.get(`/addresses/search?input=${inputValue}`);
                    if (response.data && Array.isArray(response.data)) {
                        setLocalAddresses(response.data);
                        dispatch(setAddresses(response.data));
                        // Check if the input value matches any address in the response
                        let selectedItem = response.data.find(item => item.mainText + ' ' + item.secondaryText === e.target.value)
                        selectedItem !== undefined ? setSelectedItem(selectedItem) : setSelectedItem({})
                        // Cache the result for future reference
                        setCache(prevCache => ({
                            ...prevCache,
                            [inputValue]: response.data
                        }));
                    } else {
                        console.error("Unexpected response format from the Node.js server.");
                    }
                } catch (error) {
                    console.error("Error fetching addresses from Node.js server:", error);
                }
            }
        } else {
            // Clear addresses if input value is less than 3 characters
            setLocalAddresses([]);
        }
    };
    // Clear input field if the provided address doesn't match any of the suggested addresses
    const handleInputBlur = () => {
        const matchingAddress = addresses.find(address => address.mainText + ' ' + address.secondaryText === input);
        if (!matchingAddress) {
            setInput('');
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const propertyData = {
            title: title,
            placeId: get(selectedItem, 'placeId', ''),
            propertyType: propertyType,
            area: input,
            price: price,
            levels: levels,
            bathrooms: bathrooms,
            description: description
        };
        // Post the property data to the server
        instanceAxios.post('/property/save-property', propertyData)
            .then(response => {
                dispatch(showModal(<div>Το ακίνητο αποθηκεύτηκε επιτυχώς!</div>));

                setTitle('');
                setInput('');
                setPropertyType('');
                setSelectedItem({});
                setLocalAddresses([]);
                setPrice('');
                setLevels('');
                setBathrooms('');
                setDescription('');
            })
            .catch(error => {
                console.log(error);
                dispatch(showModal("Error saving property to backend:", error));
            });
    };

    return (
        <div className="mx-auto property-ad-form">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="my-3">New property classified</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="areaInput" className="form-label">Title</label>
                                <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required maxLength="155" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <select className="form-select" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} required>
                                    <option value="">Select Type</option>
                                    <option value="rent">Rent</option>
                                    <option value="buy">Buy</option>
                                    <option value="exchange">Exchange</option>
                                    <option value="donation">Donation</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="areaInput" className="form-label">Area</label>
                                <input
                                    className="form-control"
                                    id="areaInput"
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    placeholder="Start typing address..."
                                    list="addresses"
                                    required
                                />
                                <datalist id="addresses">
                                    {addresses.map((address, index) => (
                                        <option key={index} value={address.mainText + ' ' + address.secondaryText} data-id={address.placeId} />
                                    ))}
                                </datalist>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Levels</label>
                                <input className="form-control" type="number" value={levels} onChange={(e) => setLevels(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Bathrooms</label>
                                <input className="form-control" type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description:</label>
                                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <button className="mb-3" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyAdForm;
