import React from 'react'
import {FaBars, FaCartPlus, FaTimes} from 'react-icons/fa'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './Nav.css'
import {useGlobalContext} from './context'

const Nav = () => {

 const {dispatch, showNav } = useGlobalContext();


 return (
    <section className="navbar">
      <Link className="logo" to="/">
        <p className="my">
         My
        </p>
        <p className="shop">
         Shop
        </p>
      </Link>

      <div className={`link-cart-container ${showNav ? "show-nav" : ""}`}>
        <Link className="logo-sidebar" to="/">
           <div>
            <p className="my">
             My
            </p>
           <p className="shop">
            Shop
           </p>
           </div>

         <div className="close-btn" onClick={() => dispatch({type : "TOGGLE_NAV"})}>
          <FaTimes />
         </div>
      </Link>

         <div className="nav-links">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/products">
            Products
          </Link>
        </div>

        <div className="cart-container">
          <div className="cart-inner-container">
           <p className="my-cart">My Cart</p>
           <Link to="/products" className="cart-icon-container">
             <p className="cart-amount">3</p>
             <FaCartPlus className="cart-icon" />
           </Link>
          </div>
        </div>
      </div>

      <div className="nav-bar-icon"  onClick={() => dispatch({type : "TOGGLE_NAV"})}>
       
       <FaBars />
      </div>
    </section>
 )
}

export default Nav;