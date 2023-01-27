import "./SkillList.css"

const SkillList = ({skillArray}) => {
  return (
    <div className="skill-list">
        <h3 className="category">{skillArray.name}</h3>
        <ul className="skill-list-ul">
            {skillArray.skills.map((skill, i) => {
                return (
                <li className="skill" key={i}>
                    {skill}
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SkillList