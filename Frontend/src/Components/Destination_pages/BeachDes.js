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
        category: "beach" 
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

function BeachDes() {
    // Filter destinations by category "beach"
    const filteredData = data.filter(destination => destination.category.toLowerCase() === "beach");

    return (
        <div className="p-5" style={{ background: 'rgb(245, 245, 245)' }}>
            <h1 className="fw-bold pt-5" style={{ fontFamily: 'Courier New' }}>Paradise on the Shore</h1>
            <p className=" pb-5" style={{ fontFamily: 'Papyrus', fontSize:'1.5rem' }}>Discover the world's most beautiful beaches, where the sun, sand, and sea meet to create unforgettable memories.</p>
           <div className="container">
                <div className="row justify-content-center pt-3">
                    {filteredData.map((destination, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                            <Card style={{ width: '24rem', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
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
                                        style={{ textAlign: 'start', fontSize: '0.75rem', marginBottom: '10px' }}>
                                        {destination.description}
                                    </Card.Text>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img 
                                                className="me-2" 
                                                src={pin} 
                                                alt="Location Pin" 
                                                style={{ height: '20px' }} 
                                            />
                                            <span className="text-secondary" style={{ fontSize: '0.95rem' }}>
                                                {destination.location}
                                            </span>
                                        </div>

                                        <span 
                                            className="badge bg-light text-secondary fw-bold" 
                                            style={{
                                                border: '1px solid #ddd', 
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

export default BeachDes;
