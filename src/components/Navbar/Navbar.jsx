import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-content">
            <div className="left">LOGO</div>
            <div className="center">
                <a className="link" href="#home">Home</a>
                {/* <a className="link" href="#about">About</a> */}
                <a className="link" href="#skills">Skills</a>
                <a className="link" href="#projects">Projects</a>
            </div>
            <div className="right">
                <a className="link contact" href="#contact">Contact Me</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar