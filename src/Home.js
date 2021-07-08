import React from 'react'
import image1 from './images/alexandra-gorn-W5dsm9n6e3g-unsplash.jpg'
import image2 from './images/minh-pham-OtXADkUh3-I-unsplash.jpg'
import './Home.css'

const Home = () => {
 return (
  <section className="home-container">
     <div className="home-inner-container">
        <div className="home-intro">
        <h1>Design Your . . . <br/>
    . . . Comfort Zone</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate ad eos dignissimos reprehenderit ullam modi eius laboriosam. Velit, praesentium dolor quae temporibus reprehenderit nihil. Ipsam quisquam vero nesciunt voluptatibus.
        </p>
        <button className="btn">Shop Now</button>
       </div>

       <div className="img-container">
        <img className="img1" src={image1} alt="alt"/>
        <img className="img2" src={image2} alt="" />
       </div>
     </div>

     <div className="home-featured-products">
       <div className="featured-product-title">
        <h1>Featured Products</h1>
        <div className="underline"></div>
       </div>

       <div className="featured-products">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
       </div>

       <button className="btn">All Products</button>
     </div>

     <div className="joinletter">
       <div className="joinletter-container1">
         <h2>Join our newsletter and get 20% off</h2>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
         </p>
       </div>

       <div className="form">
        <input type="email" placeholder="Enter your email"/>
        <button type="button">Subscribe</button>
       </div>
     </div>

     <div className="bottom-nav">
      <p>@{new Date().getFullYear()} All rights reserved.</p>
     </div>
   
  </section>
 );
}

export default Home;