<<<<<<< HEAD
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

    return (
        <div className='p-5' style={{ background: 'rgb(245, 245, 245)' }}>
            <h1 className='fw-bold pt-5' style={{ fontFamily: 'sans-serif' }}>Explore Popular Destinations</h1>

            <div className="container">
                <div className="row justify-content-center pt-2">
                    {destinations.map((destination, index) => (
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
=======

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import parisimg from './images/destination-Img/paris.jpg';
import baliimg from './images/destination-Img/bali.jpg';
import nyimg from './images/destination-Img/newyork.jpg';
import sydneyimg from './images/destination-Img/sydney.jpg';
import pin from './images/destination-Img/pin.png';
// import parisimg from './images/destination-Img/rome.jpg';

const data = [
    { id: 1, name: "Paris", location: "France", image: parisimg },
    { id: 2, name: "Bali", location: "Indonesia", image: baliimg },
    { id: 3, name: "New York", location: "USA", image: nyimg },
    { id: 4, name: "Sydney", location: "Australia", image: sydneyimg },
    // { id: 5, name: "Rome", location: "Italy", image: "./destination-Img/rome.jpg" },
    // { id: 6, name: "Tokyo", location: "Japan", image: "./destination-Img/tokyo.jpg" }
];

function Destinations() {
    return (
        <div className=' p-5' style={{ background:'rgb(245, 245, 245)' }}>
            <h1 className='fw-bold pt-5'style={{ fontFamily:'sans-serif'}}>Explore Popular Destinations</h1>

            <div className="container">
                <div className="row justify-content-center pt-2">
                    {data.map((destination, index) => (
                        <div key={index} className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={destination.image} alt={destination.name} />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ textAlign:'start' }}>{destination.name}</Card.Title>
                                    {/* <Card.Text className='text-align-start text-secondary'>{destination.location}</Card.Text> */}
                                    <div className='d-flex align-items-center'>
                                        <img className='me-1'src={pin} />
                                        <Card.Text className='text-secondary mb-0'>{destination.location}</Card.Text>
                                    </div>
                                    {/* <Button variant="primary">Explore {destination.name}</Button> */}
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
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
