import React from 'react'
import HeroImg from "../assets/portfoliopic.png";

export default function Hero() {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0" style={{paddingRight: "6%"}}>
          <h1 className="text-4xl lg:text-6xl animate-fade-in-down" style={{fontFamily: "'Montagu Slab', serif"}}>
            Hi, <br />I'm Dana <br />
          </h1>
          <h1 className="text-4xl lg:text-2xl animate-fade-in-up">
            Software engineer with a passion for artistry and 
            design and a background in education.
          </h1>

          <p className="py-5">
          
          </p>

          <a href="/#projects" className=' btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent hover:text-black animate-fade-in-up'>
            See Projects
          </a>
        </div>

        <div className="hero-img" style={{marginTop: "4%"}}>
        <img
            src={HeroImg}
            alt="my photo"
            className="lgw-[80%] ml-auto"
            style={{maxWidth: "80%"}}
          />
        </div>
      </div>
    </section>
  )
}
