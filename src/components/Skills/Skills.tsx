import Image from "next/image";
import "./Skills.css";
import skills from "@/components/data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>

        <div className="items">
          {skills.map((data) => (
            <>
              <div className="item"
              data-aos="flip-left"
              data-aos-duration = "1000"
              >
                <Image src={data.imageSrc} alt="" width={90} height={90} />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
