import React from 'react';
import logo from '../images/abc_logo.svg'

const Layout = ({ currentPage, setCurrentPage }) => {
  
  return (
    <div className="Layout">
      <div className="nav-div">
        <img src={logo} alt="abc-logo"/>
        <div className="nav-menu">
          <ul>
            <li 
              className={currentPage==='Industries' ? "color-yellow" : ""}
              onClick={() => setCurrentPage("Industries")}>Industries</li>
            <li
              className={currentPage==="Services" ? "color-yellow" : ""}
              onClick={() => setCurrentPage("Services")}>Services</li>
            <li
              className={currentPage==="About Us" ? "color-yellow" : ""}
              onClick={() => setCurrentPage("About Us")}>About Us</li>
          </ul>
        </div>
      </div>
      <div>
        <button className="navbar-button-contact">Contact Us</button>
      </div>
    </div>
  )
}

export default Layout;