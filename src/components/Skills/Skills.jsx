import "./Skills.css"
import SkillList from "./SkillList"
import { Data } from "./Data"

const Skills = () => {
  return (
    <section className="section skills" id="skills">
        <div className="content">
            <h2 className="title">My Skills</h2>
            <div className="my-skills">
                {Data.map((arr, i)=>{
                    return <SkillList key={i} skillArray={arr}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills