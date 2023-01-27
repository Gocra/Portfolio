import "./Projects.css"
import Project from "./Project"
import { projectData } from "./Data"

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="content">
        <h3 className="title">My Projects</h3>
        <div className="projects-grid">
          {projectData.map((project, i) => {
            return <Project key={i} {...project}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects