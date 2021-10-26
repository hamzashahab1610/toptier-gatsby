import React, { useState } from "react"
import "./Navbar.css"
import Logo from "../../assets/Logo.png"
import Close from "../../assets/times-solid.svg"
import Burger from "../../assets/burger.png"
import { Link } from "gatsby"

const Navbar = () => {
  const [isOpen, setisOpen] = useState()
  const [animationState, setanimationState] = useState()

  const collapseHandler = isOpen => {
    setisOpen(isOpen)

    if (isOpen) setanimationState("openNav")
    else setanimationState("closeNav")
  }

  return (
    <div className="nav-container">
      <img src={Logo} className="logo" />
      <div className="nav-right">
        <Link to="#" className="nav-link">
          Home
        </Link>
        <Link to="#" className="nav-link">
          About Me
        </Link>
        <Link to="#" className="nav-link">
          Freebies
        </Link>
        <Link to="#" className="nav-link">
          Blog
        </Link>
        <Link to="#" className="nav-link">
          Contact
        </Link>
      </div>

      <div className="nav-collapse" onClick={e => collapseHandler(!isOpen)}>
        <img src={Burger} alt="" />
      </div>

      <div className={`collapse ${animationState}`}>
        <div className="close" onClick={e => collapseHandler(!isOpen)}>
          <img width="15px" src={Close} alt="" />
        </div>

        <Link to="#" className="collapse-link">
          Home
        </Link>
        <Link to="#" className="collapse-link">
          About me
        </Link>
        <Link to="#" className="collapse-link">
          Freebies
        </Link>
        <Link to="#" className="collapse-link">
          Blog
        </Link>
        <Link to="#" className="collapse-link">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
