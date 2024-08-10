import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/static/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/user/Profile';
import ViewCoins from './components/user/ViewCoins';
import ConvertCoins from './components/user/ConvertCoins';
import Shop from './components/user/Shop';
import MySubmission from './components/user/MySubmissions';
import SubmitWaste from './components/user/SubmitWaste';
import Navbar from './components/common/Navbar';
import Resident from './components/user/Resident';
import Commercial from './components/user/Commercial';
import EWaste from './components/user/EWaste';
import Footer1 from './components/common/Footer1';
import Scroll from './components/static/Scroll';
import Thanks from './components/user/Thanks';
import ForgotPassword from './components/auth/ForgotPassword';
import Cart from './components/user/Cart'; // Import Cart component
import AddAddress from './components/user/AddAddress'; // Import AddAddress component
import Payment from './components/user/Payment';
import Feedback from './components/user/Feedback';
import Job from './components/user/Job';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Placeholder for login state
  const location = useLocation();

  // Determine if Navbar should be shown based on the current route
  const showNavbar = !['/login', '/register', '/forgotpass'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-coins" element={<ViewCoins totalCoins={100} transactions={[
            { date: '2023-07-28', amount: 50, type: 'Completed Challenge' },
            { date: '2023-07-27', amount: 30, type: 'Submitted Solution' },
            { date: '2023-07-26', amount: 20, type: 'Reviewed Code' },
            { date: '2023-07-25', amount: 40, type: 'Daily Login Bonus' },
            { date: '2023-07-24', amount: 10, type: 'Shared Solution' }
          ]} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> {/* Add this route */}
          <Route path="/mysubmission" element={<MySubmission />} />
          <Route path="/submitwaste" element={<SubmitWaste />} />
          <Route path="/resident" element={<Resident />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/ewaste" element={<EWaste />} />
          <Route path="/footer1" element={<Footer1 />} />
          <Route path="/scroll" element={<Scroll />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/add-address" element={<AddAddress />} /> 
          <Route path="/payment" element={<Payment />} />
          <Route path="/feedback" element={<Feedback />} />   
          <Route path="/job" element={<Job />} />  
           {/* Add this route */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
