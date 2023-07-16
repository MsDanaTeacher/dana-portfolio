import React from 'react'
import ISeeMeImg from "../assets/iseeme.png";
import AbanHackathon from "../assets/abanhackathon.png";
import ArtProject from "../assets/artproject.png";
import WomenInStem from "../assets/womenstem.png";

export default function Projects() {
  const projects = [
    {
      img: ISeeMeImg,
      title: "I See Me",
      desc: "Fullstack app that enables teachers to share their expertise on culturally responsive children’s books.",
      code: "https://github.com/MsDanaTeacher/I-See-Me",
      figma: "https://www.figma.com/file/gqRCPXzmZhhGFnBfeQb0Vj/I-See-Me?t=FtkaAALoKcsVUuuV-1",
      demo: "https://www.loom.com/share/1731231d144342cea95e6109c3bcc923",
    },
    {
      img: WomenInStem,
      title: "Women in STEM",
      desc: "Fullstack app that enables teachers to share information about influential women in STEM, as well as record student responses to learning.",
      code: "https://github.com/MsDanaTeacher/Women-in-STEM",
      figma: "https://www.figma.com/file/RMH5OsKXqQIJaamoPrfsoC/Women-In-Stem-Education-App?t=FtkaAALoKcsVUuuV-1",
      demo: "https://www.loom.com/share/9b607abf8b05478f8442d86d8e5b19f2",
    },
    {
      img: AbanHackathon,
      title: "Hackathon for Aban",
      desc: "This project was made for ps752justice's Hackathon for Aban and serves as a reference to verified information about the Iranian protests, commonly referred to as Bloody November, which began in November of 2019 and resulted in the deaths of 1500 Iranian civilians.",
      code: "https://github.com/Rooksac/Aban-Hackathon",
      figma: "https://www.figma.com/file/xiN6YSzMTPhi6yMF5cq9G3/Hackathon-for-Aban?t=FtkaAALoKcsVUuuV-1",
      demo: "https://aban-hackathon.onrender.com/"
    },
    {
      img: ArtProject,
      title: "RembrArt",
      desc: "A frontend app that challenges users to find matching pairs of famous works of modern art.",
      code: "https://github.com/MsDanaTeacher/Artwork-Memory-Game",
      figma: "https://www.figma.com/file/kEMBCaQiKTJOQ3KKMcojh2/Art-Matching-Game?node-id=0%3A1&t=FtkaAALoKcsVUuuV-1",
      demo: "https://www.loom.com/share/8e996631d72047a2837b67a16e45d204",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects" style={{color: "black"}}>
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2" style={{fontFamily: "'Montagu Slab', serif"}}>
            Projects
          </h2>

          <p className="pb-5" style={{fontFamily: "'Lato', sans-serif"}}>
            My projects are a reflection of my passions, which stem from my background in education and the arts.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className='relative' key={i} style={{marginBottom: "8px", marginTop: "45px"}}>
              <img src={project.img} className="left-0 right-0 top-[13px] bottom-0 mx-auto w-[80%] h-[80%]"/>
              <div className="flex absolute left-0 right-0 top-[0px] bottom-0 mx-auto w-[90%] h-[100%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
              <h3 className="py-5 text-center font-bold px-2">
                  {project.title}
                </h3>
                <p className="py-5 text-center font-bold px-2">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-[#7477FF] text-white hover:text-black hover:bg-[#fff] border-2 border-[#7477FF] font-bold"
                    style={{marginRight: "1rem"}}
                    target="_blank"
                    >
                      Code
                    </a>
                    
                    <a
                    href={project.figma}
                    className="px-5 py-2 bg-[#7477FF] text-white hover:text-black hover:bg-[#fff] border-2 border-[#7477FF] font-bold"
                    style={{marginRight: "1rem"}}
                    target="_blank"
                    >
                      Figma
                    </a>

                   
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
