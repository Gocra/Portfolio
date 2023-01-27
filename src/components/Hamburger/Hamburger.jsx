import "./Hamburger.css"

const Hamburger = ({click}) => {
  return (
    <div className='hamburger' onClick={click}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
  )
}

export default Hamburger