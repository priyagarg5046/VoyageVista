import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav, Card, Button } from 'react-bootstrap';
import { FaUmbrellaBeach, FaMountain, FaCity, FaTree } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import axios

function Inspo() {
  const [selectedTab, setSelectedTab] = useState('beach');
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    axios.get('http://localhost:4444/VoyageVista/destinations') 
      .then(response => {
        setDestinations(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching destinations", err);
        setError('Failed to load destinations');
        setLoading(false);
      });
  }, []);

  // Group destinations by category for tabs
  const recommendations = {
    beach: destinations.filter(dest => dest.category === 'Beach'),
    mountain: destinations.filter(dest => dest.category === 'Mountain'),
    city: destinations.filter(dest => dest.category === 'City'),
    nature: destinations.filter(dest => dest.category === 'Nature'),
  };

  return (
    <Container className="px-4 py-5">
      <h2 className="text-center m-5 fw-bold">Travel Inspiration</h2>
      <Tab.Container id="left-tabs-example" defaultActiveKey={selectedTab} onSelect={(k) => setSelectedTab(k)}>
        <Nav variant="tabs" className="justify-content-center mb-4 text-dark">
          <Nav.Item>
            <Nav.Link eventKey="beach" className='text-dark'><FaUmbrellaBeach className="mr-2" /> Beach</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="mountain" className='text-dark'><FaMountain className="mr-2" /> Mountain</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="city" className='text-dark'><FaCity className="mr-2" /> City</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="nature" className='text-dark'><FaTree className="mr-2" /> Nature</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {Object.entries(recommendations).map(([key, value]) => (
            <Tab.Pane eventKey={key} key={key}>
              <Row xs={1} md={3} className="g-4">
                {value.map((item, index) => (
                  <Col key={index}>
                    <Card>
                      <Card.Img variant="top" src={`http://localhost:4444/${item.image}`} alt={item.name} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Link to={item.link}>
                          <Button variant="info">Learn More</Button>
                        </Link>
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
