// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Inspo() {
//     return (
//         <div>
//             <h1 className='fw-bold m-5'>Personalized Travel Recommendations</h1>

//             <div className="row d-flex justify-content-center overflow-auto">
//                 <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
//                     <Card style={{ width: '18rem' }}>
//                         <Card.Img variant="top" src="holder.js/100px180" />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 {/* Some quick example text to build on the card title and make up the
//                                 bulk of the card's content. */}
//                             </Card.Text>
//                             <Button variant="primary">view</Button>
//                         </Card.Body>
//                     </Card>
//                 </div>
                
//             </div>
//         </div>
//     );
// }

// export default Inspo;


import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Card, Button } from 'react-bootstrap';
import {  FaUmbrellaBeach,FaMountain, FaCity, FaTree } from 'react-icons/fa'; 


import maldives from'./images/inspo-sec/maldives.jpg';
import bali from'./images/inspo-sec/bali.jpg';
import Hawaii from'./images/inspo-sec/hawaii.jpg';
import swissalps from'./images/inspo-sec/swissapls.jpg';
import patagonia from'./images/inspo-sec/patagonia.jpg';
import himalayas from'./images/inspo-sec/himalayas.jpg';
import tokyo from'./images/inspo-sec/tokyo.jpg';
import paris from'./images/inspo-sec/paris.jpg';
import newyork from'./images/inspo-sec/nyc.jpg';
import amazon from'./images/inspo-sec/amazon.jpg';
import yellowstone from'./images/inspo-sec/yellowstone.jpg';
import greatbarrier from'./images/inspo-sec/barrier-reef.jpg';


const recommendations = {
    beach: [
        { name: "Maldives", description: "Beautiful beaches with crystal clear water." , image: maldives },
        { name: "Bali", description: "Stunning beaches and vibrant culture", image: bali },
      { name: "Hawaii", description: "Tropical paradise with diverse landscapes", image: Hawaii },
    ],
    mountain: [
        { name: "Swiss Alps", description: "Majestic peaks and world-class skiing", image: swissalps },
        { name: "Patagonia", description: "Rugged wilderness and breathtaking views", image: patagonia },
        { name: "Himalayas", description: "Scenic beauty and outdoor adventures", image: himalayas },
      ],
      city: [
        { name: "Tokyo", description: "Futuristic technology meets ancient traditions", image: tokyo },
        { name: "Paris", description: "Romance, art, and exquisite cuisine", image: paris },
        { name: "New York", description: "The city that never sleeps", image: newyork },
      ],
      nature: [
        { name: "Amazon Rainforest", description: "Unparalleled biodiversity and adventure", image: amazon },
        { name: "Yellowstone", description: "Geothermal wonders and wildlife", image: yellowstone },
        { name: "Great Barrier Reef", description: "World's largest coral reef system", image: greatbarrier },
      ],
};

function Inspo() {
    const [selectedTab, setSelectedTab] = useState('beach');

    return (
        <Container className="px-4 py-5">
            <h2 className="text-center m-5 fw-bold ">Travel Inspiration</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey={selectedTab} onSelect={(k) => setSelectedTab(k)}>
                <Nav variant="tabs" className="justify-content-center mb-4 text-dark">
                <Nav.Item>
                        <Nav.Link eventKey="beach" className='text-dark' ><FaUmbrellaBeach className="mr-2" /> Beach</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mountain" className='text-dark'><FaMountain className="mr-2" /> Mountain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="city" className='text-dark'><FaCity className="mr-2" /> City</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="nature"className='text-dark'><FaTree className="mr-2" /> Nature</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    {Object.entries(recommendations).map(([key, value]) => (
                        <Tab.Pane eventKey={key} key={key}>
                            <Row xs={1} md={3} className="g-4">
                                {value.map((item, index) => (
                                    <Col key={index}>
                                        <Card>
                                            <Card.Img variant="top" src={item.image} alt={item.name} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <Button variant="info">Learn More</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
}

export default Inspo;
