import "./Home.css";

const Home = () => {
  return (
    <section className="section home" id="home">
      <div className="content">
        <h1 className="name">Brynn Revell</h1>
        <p className="title">Software Developer</p>
        <p className="about">I am a software developer developer with a flair for creating <span className="em">elegant</span> and <span className="em">intuitive</span> experiences. Looking for growth opportunities to expand my technical skill set and put it to use.</p>
        <div className="links">
          <a target="_blank" rel="noreferrer" href="https://www.github.com/Gocra" className="link github">Github</a>
          <a href="#contact" className="link contact">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Home