import './App.css';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import ViewDetailsWrapper from './Components/ViewDetailsWrapper';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destinations from './Components/Destinations';
import Booking from './Components/Booking';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/destination" element={<Destinations/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/viewdetails/:cityName" element={<ViewDetailsWrapper/>} />
          <Route path="/booking" element={<Booking/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
