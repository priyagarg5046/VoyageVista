import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import pin from './images/destination-Img/pin.png';

function Destinations() {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://localhost:4444/VoyageVista/destinations'); // Replace with your API endpoint
                setDestinations(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch destinations.');
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    if (loading) {
        return <div>Loading destinations...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Slice the destinations array to get the latest 4 items
    const latestDestinations = destinations.slice(-4);

    return (
        <div className='p-5' style={{ background: 'rgb(245, 245, 245)' }}>
            <h1 className='fw-bold pt-5' style={{ fontFamily: 'sans-serif' }}>Explore Popular Destinations</h1>

            <div className="container">
                <div className="row justify-content-center pt-2">
                    {latestDestinations.map((destination, index) => (
                        <div key={index} className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:4444/${destination.image}`} // Adjust based on your API response
                                    alt={destination.name}
                                />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ textAlign: 'start' }}>{destination.name}</Card.Title>
                                    <div className='d-flex align-items-center'>
                                        <img className='me-1' src={pin} alt="Location pin" />
                                        <Card.Text className='text-secondary mb-0'>{destination.location}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Destinations;
