import * as React from "react"
import PropTypes from "prop-types"
//import { Link } from "gatsby"
import "./topMenu.css"
import clock from "../../images/icons/clock.svg"
import phone from "../../images/icons/phone.svg"
import location from "../../images/icons/location.svg"
import logo from "../../images/icons/logo.png"

const TopMenu = ({ siteTitle }) => (
  <nav className="menu-top"> 
    <div className="menu-top__common">
      <div className="container">
        <div className="menu-top__common-item">
          <img className="menu-top__common-icon" src={clock} alt="clock icon" />
          <span>Monday-Saturday 7:00AM - 6:00PM</span>
        </div>
        <div className="menu-top__common-item">
          <img className="menu-top__common-icon" src={phone} alt="phone icon" />
          <span><a href="tel:+420608777444">+420 608 777 444</a></span>
        </div>
        <div className="menu-top__common-item">
          <img className="menu-top__common-icon" src={location} alt="location icon" />
          <span>Mohylová 432/48, 312 00 Plzeň 4</span>
        </div>
      </div>
    </div>

    <div className="menu-top__pages">
      <div className="container">
        <div className="menu-top__pages-logo">
          <img className="menu-top__logo" src={logo} alt="main logo" />
        </div>
        <div className="menu-top__pages-items">
          <div className="menu-top__pages-item">about</div>
          <div className="menu-top__pages-item">services</div>
          <div className="menu-top__pages-item">pricing</div>
          <div className="menu-top__pages-item">gallery</div>
          <div className="menu-top__pages-item">testimonials</div>
          <div className="menu-top__pages-item">contacts</div>
        </div>
      </div>
    </div>
  </nav>
)

TopMenu.propTypes = {
  siteTitle: PropTypes.string,
}

TopMenu.defaultProps = {
  siteTitle: ``,
}

export default TopMenu
