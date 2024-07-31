// // import React from 'react';
// // import '../../assets/styles/SubmitWaste.css';

// // // Example image sources
// // import residentImage from '../../assets/images/Resident.jpg';
// // import commercialImage from '../../assets/images/Commercial.jpg';
// // import ewasteImage from '../../assets/images/ewaste.jpg';

// // const SubmitWaste = () => {
// //   return (
// //     <div id="submit-waste-section" className="categories-container">
// //       <div className="category-box">
// //         <div className="image-container">
// //           <img src={residentImage} alt="Resident" className="circle-image" />
// //         </div>
// //         <h3>Resident</h3>
// //         <p className="description">Manage your household waste efficiently and earn rewards by submitting recyclable materials.</p>
// //       </div>
// //       <div className="category-box">
// //         <div className="image-container">
// //           <img src={commercialImage} alt="Commercial" className="circle-image" />
// //         </div>
// //         <h3>Commercial</h3>
// //         <p className="description">Submit waste from commercial activities and help keep the environment clean while earning coins.</p>
// //       </div>
// //       <div className="category-box">
// //         <div className="image-container">
// //           <img src={ewasteImage} alt="E-Waste" className="circle-image" />
// //         </div>
// //         <h3>E-Waste</h3>
// //         <p className="description">Dispose of electronic waste responsibly and contribute to reducing e-waste pollution.</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubmitWaste;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/styles/SubmitWaste.css';

// // Example image sources
// import residentImage from '../../assets/images/Resident.jpg';
// import commercialImage from '../../assets/images/Commercial.jpg';
// import ewasteImage from '../../assets/images/ewaste.jpg';

// const SubmitWaste = () => {
//   return (
//     <div id="submit-waste-section" className="categories-container">
//       <Link to="/resident" className="category-box">
//         <div className="image-container">
//           <img src={residentImage} alt="Resident" className="circle-image" />
//         </div>
//         <h3>Resident</h3>
//         <p className="description">Manage your household waste efficiently and earn rewards by submitting recyclable materials.</p>
//       </Link>
//       <Link to="/commercial" className="category-box">
//         <div className="image-container">
//           <img src={commercialImage} alt="Commercial" className="circle-image" />
//         </div>
//         <h3>Commercial</h3>
//         <p className="description">Submit waste from commercial activities and help keep the environment clean while earning coins.</p>
//       </Link>
//       <Link to="/ewaste" className="category-box">
//         <div className="image-container">
//           <img src={ewasteImage} alt="E-Waste" className="circle-image" />
//         </div>
//         <h3>E-Waste</h3>
//         <p className="description">Dispose of electronic waste responsibly and contribute to reducing e-waste pollution.</p>
//       </Link>
//     </div>
//   );
// };

// export default SubmitWaste;
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/SubmitWaste.css';

// Example image sources
import residentImage from '../../assets/images/residents.jpg';
import commercialImage from '../../assets/images/commercials.jpg';
import ewasteImage from '../../assets/images/ewates.jpg';

const SubmitWaste = () => {
  return (
    <div id="submit-waste-section" className="categories-container">
      <Link to="/resident" className="category-box">
        <div className="image-container">
          <img src={residentImage} alt="Resident" className="circle-image" />
        </div>
        <h3 className="category-title">Resident</h3>
        <p className="description">Manage your household waste efficiently and earn rewards by submitting recyclable materials.</p>
      </Link>
      <Link to="/commercial" className="category-box">
        <div className="image-container">
          <img src={commercialImage} alt="Commercial" className="circle-image" />
        </div>
        <h3 className="category-title">Commercial</h3>
        <p className="description">Submit waste from commercial activities and help keep the environment clean while earning coins.</p>
      </Link>
      <Link to="/ewaste" className="category-box">
        <div className="image-container">
          <img src={ewasteImage} alt="E-Waste" className="circle-image" />
        </div>
        <h3 className="category-title">E-Waste</h3>
        <p className="description">Dispose of electronic waste responsibly and contribute to reducing e-waste pollution.</p>
      </Link>
    </div>
  );
};

export default SubmitWaste;
