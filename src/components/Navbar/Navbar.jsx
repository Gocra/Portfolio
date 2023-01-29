import { useState } from "react"
import Hamburger from "../Hamburger/Hamburger";
import "./Navbar.css"

const Navbar = () => {

  const [showDropdownMenu, setShowDropdownMenu] = useState(false)
  const dropdownClass = showDropdownMenu ? "hamburger-dropdown show" : "hamburger-dropdown";

  return (
    <nav className="navbar">
        <div className="navbar-content">
            <div className="left">
              <a href="#home" className="logo">Brynn Revell</a>
            </div>
            <div className="center">
                <a className="link" href="#home">Home</a>
                <a className="link" href="#skills">Skills</a>
                <a className="link" href="#projects">Projects</a>
            </div>
            <div className="right">
                <a className="link btn btn-blue" href="#contact">Contact Me</a>
            </div>
              <Hamburger click={()=>setShowDropdownMenu(prev => !prev)}/>
        </div>
        <div className={dropdownClass}>
          <a className="link" href="#home" onClick={()=>setShowDropdownMenu(false)}>Home</a>
          <a className="link" href="#skills" onClick={()=>setShowDropdownMenu(false)} >Skills</a>
          <a className="link" href="#projects" onClick={()=>setShowDropdownMenu(false)}>Projects</a>
          <a className="link contact" href="#contact" onClick={()=>setShowDropdownMenu(false)}>Contact Me</a>
        </div>
    </nav>
  )
}

export default Navbar