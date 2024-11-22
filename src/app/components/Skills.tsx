import { SkillsIcons } from "../utils/Objects";
const Skills = () => {
    return (
        <div  className=" cards d-flex flex-wrap w-100 gap-3 justify-content-center mt-5 col-5 mb-5">
            {SkillsIcons.map((icon, i) => (
                <div className="card d-flex flex-column bg-black overflow-hidden  p-5 position-relative border-radius-5 " key={i}>
                    <>{icon.icon}</>
                    <p className="text-white z-3 mt-5">{icon.name}</p>
                </div>
            ))}
        </div>);
}

export default Skills;