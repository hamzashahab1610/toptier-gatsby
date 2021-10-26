import React from "react"
import Banner from "../../assets/banner.png"
import "./Header.css"
import Rectangle1 from "../../assets/Rectangle 51.png"
import Rectangle2 from "../../assets/Rectangle 52.png"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-left">
          <h2 className="greet">Hi, Welcome! </h2>
          <h1 className="grade">Grade is good at explaining what I'm doing</h1>
          <button className="bookBtn">Book an Appointment</button>
        </div>

        <img className="rectangle1" src={Rectangle1} alt="" />
        <img className="rectangle2" src={Rectangle2} alt="" />

        <div className="header-right">
          <img src={Banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
