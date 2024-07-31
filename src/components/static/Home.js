// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/styles/Home.css';
// import HowitWorks from './HowItWorks';

// const Home = ({ isLoggedIn }) => {
//   return (
//     <div className="home">
//       <div className="hero-container">
//         <h1>Welcome to the Waste Management Platform</h1>
//         <p className="slogan">TURN TRASH INTO CASH</p>
//       </div>
//       <div className='des'>
//         <p>
//           Here at our platform, you can submit your waste and earn coins. These coins can be converted to money or used to buy products from our shop. We ensure that your waste is collected and sent to recycling plants, benefiting the environment and helping us all.
//         </p>
//         {!isLoggedIn && (
//           <div className="home-buttons">
//             <Link to="/login" className="home-button">LOGIN</Link>
//             <Link to="/register" className="home-button">REGISTER</Link>
//           </div>
//         )}
//       </div>
//       {!isLoggedIn && <HowitWorks />}
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Home.css';
import HowitWorks from './HowItWorks';
import SubmitWaste from '../user/SubmitWaste';


import Footer from '../common/Footer';
import Card from './Card';
import Card2 from './Card2';
import Footer1 from '../common/Footer1';

const Home = ({ isLoggedIn }) => {
  return (
    <div className="home">
      <div className="hero-container">
        <h1>TRASHIt</h1>
        <p className="slogan">TURN TRASH INTO CASH</p>
      </div>
      <div className='des'>
        <p>
          With a simple Appointment,We will give Cash for your Trash
        </p>
        {!isLoggedIn && (
          <div className="home-buttons">
            <Link to="/login" className="home-button">Explore Now!</Link>
          </div>
        )}
      </div>
      {!isLoggedIn && <HowitWorks />}
      <SubmitWaste />
      <Card/>
      



      <Footer1></Footer1>
     
    </div>
  );
};

export default Home;
