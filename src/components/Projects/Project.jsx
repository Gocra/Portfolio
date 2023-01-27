import "./Project.css"

const Project = ({image, title, description, technologiesArr, codeLink, demoLink}) => {
    return (
    <article className="project">
        <img className="preview-image" src={image} alt="" />
        <div className="body">
            <h3 className="name">{title}</h3>
            <p className="description">{description}</p>
            <ul className="tech-list">
            {technologiesArr.map((tech, i) => {
                return <li key={i} className="tech">{tech}</li>
            })}
            </ul>
            <div className="links">
                {demoLink !== undefined ? <a className="link demo" target="_blank" rel="noreferrer" href={demoLink}>Live Demo</a> : null}
                <a className="link code" target="_blank" rel="noreferrer" href={codeLink}>Source Code</a>
            </div>
        </div>
    </article>
  )
}

export default Project