// import React, { useEffect } from 'react';
// import '../../assets/styles/Card2.css';
// import Swiper from 'swiper';


// const Card2 = () => {
//   useEffect(() => {
//     const swiper = new Swiper('.swiper', {
//       effect: 'cards',
//       grabCursor: true,
//       initialSlide: 2,
//       speed: 500,
//       loop: true,
//       rotate: true,
//       mousewheel: {
//         invert: false,
//       },
//     });
//   }, []);

//   return (
//     <section className="section">
//       <div className="content">
//         <div className="info">
//           <p>
//             Join us for a fantastic <span className="movie-night">movie night</span> filled with popcorn,
//             laughter, and great company! Whether you're a fan of thrilling action, heartwarming dramas,
//             or side-splitting comedies, we've got a film lineup to cater to all tastes. Save the date and
//             bring your favorite snacks to make it a memorable evening.
//           </p>
//           <button className="btn">Join</button>
//         </div>
//         <div className="swiper">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/b6f5eb64-887c-43b1-aaba-d52a4c59a379.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>8.5</span>
//                 <h2>The Queen's Gambit</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 className="img-position"
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/e906353b-fde0-4518-9a03-16545c1161bd.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>9.5</span>
//                 <h2>Breaking Bad</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/fc21e481-e28a-41a8-9db3-3b62c1ddc17e.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>8.1</span>
//                 <h2>Wednesday</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/6b6ad966-79e1-4d3c-8f92-566d0fee8082.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>8.7</span>
//                 <h2>Stranger Things</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/2ad44f5d-2215-4416-9c9b-2bae3be51a67.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>8.6</span>
//                 <h2>Anne with an E</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/aa8fe914-741f-4bf4-ad4a-24f19d1f4178.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>8.9</span>
//                 <h2>Friends</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 className="img-position"
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/d5f10b4f-7d34-45bd-bb5f-5f1530c2ac1c.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>8.6</span>
//                 <h2>The Crown</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/7cbac263-7c55-4428-908e-31018dc1bce3.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>8.7</span>
//                 <h2>House M.D.</h2>
//               </div>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="https://github.com/ecemgo/mini-samples-great-tricks/raw/main/assets/13468728/2929f534-3bc3-4cbd-b84c-80df863d5a38.jpg"
//                 alt=""
//               />
//               <div className="overlay">
//                 <span>9.2</span>
//                 <h2>Game of Thrones</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ul className="circles">
//         {[...Array(10)].map((_, index) => (
//           <li key={index}></li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Card2;
