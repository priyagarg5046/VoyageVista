import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Signup from './Components/users/Signup';
import Navigation from "./Components/Navigation";
// import Navbar from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home /> */}
      <Navigation/>
      <Routes>

<Route path="/Signup" element={<Signup />} />
<Route path='/' element={<Home/>}/>
</Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
