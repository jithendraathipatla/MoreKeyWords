import React from 'react';
import {Link} from 'react-router-dom';
import MainLogo from '../Images/logo.png';



const Navbar = () => {
    return (
          <div className="main_navigation_header">
           <div className="main_logo">
              <img src={MainLogo} alt="Prestige Waterford" height="20px"/>
           </div>
           <div className="main_links">
          
           <Link to="/">Home</Link>

           <Link to="/overview">Overview</Link>


           <Link to="/configuration">Configuration</Link>

           <Link to="/gallery">Gallery</Link>


           <Link to="/costing">Costing</Link>


           <Link to="/amenities">Amenities</Link>

           <Link to="/location">Location</Link>
        
          </div>
       </div>
      
    );
};

export default Navbar;