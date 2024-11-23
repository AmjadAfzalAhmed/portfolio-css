import Image from "next/image";
import "./Experience.css";
import experience from "@/components/data/experience.json";
import call from "/public/call.png"

export default function Experience() {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>

        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex-items"
              data-aos="zoom-in"
              data-aos-duration = "1000"
              >
                <div className="left">
                  <Image src={call} alt="google-icon" className="img" />
                </div>
                <div className="right">
                  <h2>
                    {data.Company}
                    {""}
                  </h2>
                  <h4>
                    {data.Title}
                    {""}
                  </h4>
                  <h5>
                    {data.Year}
                    {""}
                  </h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
