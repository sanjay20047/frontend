import React, { useState } from 'react';
import '../../assets/styles/Shop.css'
import Smartphone from '../../assets/images/phone1.jpg';
import Laptop from '../../assets/images/laptop.avif';
import Smartwatch from '../../assets/images/smartwatch.jpg';
import Tablet from '../../assets/images/tablet.jpg';
import Headphones from '../../assets/images/headphones.jpg';
import Camera from '../../assets/images/camera.jpg';
import Speaker from '../../assets/images/speaker.jpg';
import Mouse from '../../assets/images/mouse.jpg';
import Television from '../../assets/images/tv.jpg';
import Cooker from '../../assets/images/cooker.jpg';

const posts = [
    { productName: 'Smartphone', link: '../../assets/images/phone.jpg', coins: 30000, img: Smartphone},
    { productName: 'Laptop', link: '../../assets/images/laptop.avif', coins: 1000, img: Laptop },
    { productName: 'Smartwatch', link: '', coins: 200, img: Smartwatch },
    { productName: 'Tablet', link: '', coins: 400, img: Tablet },
    { productName: 'Headphones', link: '', coins: 150, img: Headphones },
    { productName: 'Camera', link: '', coins: 600, img: Camera },
    { productName: 'Speaker', link: '', coins: 250, img: Speaker },
    { productName: 'Mouse', link: '', coins: 250, img: Mouse },
    { productName: 'Television', link: '', coins: 250, img: Television },
    { productName: 'Cooker', link: '', coins: 250, img: Cooker },

  ];
  
  const Shop = () => {
    const [search, setSearch] = useState('');
  
    const filteredList = posts.filter(post => 
      post.productName.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div id="app">
        <div className="search-wrapper">
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search product name.." 
          />
          <label>Search product name:</label>
        </div>
        <div className="wrapper">
          {filteredList.map((post, index) => (
            <div className="card" key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.img} alt={post.productName} />
                <small>Coins needed: {post.coins}</small>
                <p>{post.productName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  


  export default Shop;