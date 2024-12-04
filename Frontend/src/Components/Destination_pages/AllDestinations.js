<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import pin from '../images/destination-Img/pin.png';

function AllDestinations() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4444/VoyageVista/destinations'); // Replace with your API endpoint
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch destinations.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="p-5">Loading destinations...</div>;
    }

    if (error) {
        return <div className="p-5 text-danger">{error}</div>;
    }

=======
import React from 'react';
import Card from 'react-bootstrap/Card';

import parisimg from '../images/destination-Img/paris.jpg';
import baliimg from '../images/destination-Img/bali.jpg';
import nyimg from '../images/destination-Img/newyork.jpg';
import sydneyimg from '../images/destination-Img/sydney.jpg';
import pin from '../images/destination-Img/pin.png';

const data = [
    { 
        id: 1, 
        name: "Paris", 
        description: "The city of light and love, known for its iconic Eiffel Tower and rich culture.", 
        location: "France", 
        image: parisimg, 
        category: "city" 
    },
    { 
        id: 2, 
        name: "Bali", 
        description: "A tropical paradise with stunning beaches and vibrant culture.", 
        location: "Indonesia", 
        image: baliimg, 
        category: "Beach" 
    },
    { 
        id: 3, 
        name: "New York", 
        description: "The city that never sleeps, famous for its skyline and bustling streets.", 
        location: "USA", 
        image: nyimg, 
        category: "city" 
    },
    { 
        id: 4, 
        name: "Sydney", 
        description: "Known for the Sydney Opera House, Harbour Bridge, and beautiful beaches.", 
        location: "Australia", 
        image: sydneyimg, 
        category: "beach" 
    },
];

function AllDestinations() {
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
    return (
        <div className="p-5" style={{ background: 'rgb(245, 245, 245)' }}>
             <h1 className="fw-bold pt-5" style={{ fontFamily: 'georgia' }}>Travel the World</h1>
            <p className=" pb-5" style={{ fontFamily: 'cursive', fontSize:'1.5rem' }}>Explore diverse cultures, iconic landmarks, and stunning views across the globe</p>
            <div className="container">
                <div className="row justify-content-center pt-3">
                    {data.map((destination, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                            <Card style={{ width: '24rem', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
<<<<<<< HEAD
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:4444/${destination.image}`} // Adjust based on your backend's image path
                                    alt={destination.name}
                                    style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '250px', objectFit: 'cover' }}
                                />
                                <Card.Body>
                                    <Card.Title
                                        className="fw-bold"
                                        style={{ textAlign: 'start', fontSize: '1.4rem', marginBottom: '10px' }}>
                                        {destination.name}
                                    </Card.Title>
                                    <Card.Text
                                        className="text-secondary"
=======
                                <Card.Img 
                                    variant="top" 
                                    src={destination.image} 
                                    alt={destination.name} 
                                    style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '250px', objectFit: 'cover' }} 
                                />
                                <Card.Body>
                                    <Card.Title 
                                        className="fw-bold" 
                                        style={{ textAlign: 'start', fontSize: '1.4rem', marginBottom: '10px' }}>
                                        {destination.name}
                                    </Card.Title>
                                    <Card.Text 
                                        className="text-secondary" 
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
                                        style={{ textAlign: 'start', fontSize: '0.75rem', marginBottom: '10px' }}>
                                        {destination.description}
                                    </Card.Text>

<<<<<<< HEAD
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="me-2"
                                                src={pin}
                                                alt="Location Pin"
                                                style={{ height: '20px' }}
=======
                                    {/* <hr style={{ borderTop: '1px solid #ddd' }} /> */}

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img 
                                                className="me-2" 
                                                src={pin} 
                                                alt="Location Pin" 
                                                style={{ height: '20px' }} 
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
                                            />
                                            <span className="text-secondary" style={{ fontSize: '0.95rem' }}>
                                                {destination.location}
                                            </span>
                                        </div>

<<<<<<< HEAD
                                        <span
                                            className="badge bg-light text-secondary fw-bold"
                                            style={{
                                                border: '1px solid #ddd',
=======
                                        <span 
                                            className="badge bg-light text-secondary fw-bold" 
                                            style={{
                                                border: '1px solid #ddd', 
>>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
                                                fontSize: '0.85rem',
                                                padding: '5px 10px',
                                                borderRadius: '12px'
                                            }}>
                                            {destination.category}
                                        </span>
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

export default AllDestinations;
