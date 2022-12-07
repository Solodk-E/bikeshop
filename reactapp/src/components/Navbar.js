import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div id="navbar">
      <div id="navLeft">
      <div id="homepageButton">
        <Link to="/">
        <img id="logo"src="bike-logo.svg"/>
        </Link>
        <div>The Bike Shop Experience</div>
        </div>
      <div id="navButtonList">
        <button className="navButton">
          <Link to="/cataloguescreen">  
            Catalogue
          </Link>
        </button>
        <button className="navButton">
          <Link to="/wishlistscreen">  
            Wishlist
          </Link>
        </button>
        <button className="navButton">
          <Link to="/basketscreen">
            Panier
          </Link>
        </button>            
      </div>
      </div>
      <button className="navButton" id="accountButton">
        <Link to="/accountscreen">  
          Compte
          </Link>
      </button>  
    </div>
  )
}

export default Navbar