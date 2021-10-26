import React from "react"
import "./Number.css"
import Rectangle3 from "../../assets/Rectangle 56.png"

const Number = () => {
  return (
    <div className="number-container">
      <img className="rectangle3" src={Rectangle3} alt="" />

      <div className="number-column">
        <div className="number">20</div>
        <div className="desc">Years of experience</div>
      </div>
      <div className="number-column">
        <div className="number">4000+</div>
        <div className="desc">Happy Cases</div>
      </div>
      <div className="number-column">
        <div className="number">15</div>
        <div className="desc">Awards achieved</div>
      </div>
    </div>
  )
}

export default Number
