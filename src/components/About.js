import React from 'react';
import AboutImg from "../assets/portfoliopictwo.png";

export default function About() {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about" style={{color: "black"}}>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 border-b-[5px] w-[300px] border-indigo-600 pb-2" style={{fontFamily: "'Montagu Slab', serif"}}>
            My Story
          </h2>

          <p className="pb-5" style={{fontFamily: "'Lato', sans-serif"}}>
            Hi, I'm Dana Lobell, a software engineer from New York, NY.
          </p>
          <p className="pb-5" style={{fontFamily: "'Lato', sans-serif"}}>
            I began my professional life as a teacher, which taught me how to adapt to ever changing environments, 
            collaborate effectively, and cultivate inclusive experiences for my students and their families.
          </p>

          <p className="pb-5" style={{fontFamily: "'Lato', sans-serif"}}>
            Being a lifelong learner, I was excited to begin my path into tech and find ways to be creative and build technology that matters. 
            During my studies, I learned frontend and backend technologies including JavaScript, React, Ruby, Rails, HTML and CSS. I look forward 
            to entering the world of tech and furthering my knowledge. 
          </p>

          <p className="pb-5" style={{fontFamily: "'Lato', sans-serif"}}>
            When I'm not learning about new technologies, you can find me walking in Central Park with my dog, Bali! I am also a fine art 
            portrait photographer, and am always looking to capture inspiring couples through my lens and perspective. Finally, I deeply value
            advocating for social justice, and currently focus my efforts on supporting women fighting for human rights in Iran - Zan, Zendegi, Azadi (Women, Life, Freedom)
          </p>
        </div>

        <div className="about-img" style={{marginTop: "4%"}}>
          <img src={AboutImg} alt="my photo" className="lgw-[80%] md:ml-auto" style={{maxWidth: "80%"}}/>
        </div>
      </div>
    </section>
  )
}
