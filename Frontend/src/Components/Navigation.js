import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AllDestinations from './Destination_pages/AllDestinations';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [preferences, setPreferences] = useState('');
  const [itinerary, setItinerary] = useState(null);

  // Show modal handler
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Form submit handler to send request to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend for itinerary generation
    try {
      const response = await fetch('/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination, duration, preferences }),
      });
      const data = await response.json();
      setItinerary(data.itinerary);  // Assuming the backend returns itinerary data
      handleClose();
    } catch (error) {
      console.error("Error generating itinerary:", error);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Link to="/">
            <Navbar.Brand>Voyage Vista</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="/AllDestinations">Destinations </Nav.Link>
              <Link className="nav-link" to="/deals">Deals</Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Link className="nav-link" to="/contact">Contact Us</Link>
              <Link to="/Signup">
                <Button variant="light">
                Sign In</Button>
              </Link>
              <Button variant="light"
              onClick={handleShow}>Your AI</Button>  {/* Gemini AI Button */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Gemini AI Form */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Travel Itinerary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            {/* Destination Input */}
            <div className="mb-3">
              <label htmlFor="destination" className="form-label">Destination</label>
              <input
                type="text"
                className="form-control"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>

            {/* Duration Input */}
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Duration (Days)</label>
              <input
                type="number"
                className="form-control"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </div>

            {/* Preferences Input */}
            <div className="mb-3">
              <label htmlFor="preferences" className="form-label">Preferences (Optional)</label>
              <textarea
                className="form-control"
                id="preferences"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button variant="info" type="submit" className="w-100">Generate Itinerary</Button>
          </form>

          {/* Display Itinerary */}
          {itinerary && (
            <div className="mt-3">
              <h5>Generated Itinerary</h5>
              <pre>{itinerary}</pre>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
<<<<<<< HEAD
=======

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
// import AllDestinations from './Destination_pages/AllDestinations';
// // import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Link to="/">
//           <Navbar.Brand>
//             {/* <img src={logo} /> */}
//             Voyage Vista
//           </Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto"> {/* Changed me-auto to ms-auto */}
//             <Nav.Link href="/AllDestinations">Destinations </Nav.Link>
//             <Link className="nav-link" to="/deals">Deals</Link>
//             <Nav.Link href="#link">About</Nav.Link>
//             {/* <Nav.Link href="#ContactUs">Contact Us</Nav.Link> */}
//             <Link className="nav-link" to="/contact">Contact Us</Link>
//             {/* <Link className="nav-link" to="/deals">Deals</Link> */}
//             <Link to="/Signup">
//               <Button variant="outline-secondary" onclick="/Signup">Sign In</Button>
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// <<<<<<< HEAD
// export default Navigation;
// =======
// export default Navigation;

// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import Button from 'react-bootstrap/Button';
// // import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
// // // import { Link } from 'react-router-dom';

// // function Navigation() {
// //   return (
// //     <Navbar expand="lg" className="bg-body-tertiary">
// //       <Container>
// //         <Link to="/">
// //           <Navbar.Brand>
// //             {/* <img src={logo} /> */}
// //             Voyage Vista
// //           </Navbar.Brand>
// //         </Link>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="ms-auto"> {/* Changed me-auto to ms-auto */}
// //             <Nav.Link href="#home">Destinations </Nav.Link>
// //             <Nav.Link href="#link">Deals</Nav.Link>
// //             <Nav.Link href="#link">About</Nav.Link>
// //             <Nav.Link href="#link">Contact Us</Nav.Link>
// //             <Link to="/Signup">
// //               <Button variant="outline-secondary" onclick="/Signup">Sign In</Button>
// //             </Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // }

// // export default Navigation;
// >>>>>>> 7bb4ee34a8a0cf16509c9105febc8dd319252a66
>>>>>>> 4b4d3aec5842d4d680a3e5df8620bbeb45c16c29
