import React from "react"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import Number from "../components/Number/Number"
import "./index.css"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Number />
    </div>
  )
}
