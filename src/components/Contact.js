import React from 'react'

export default function Contact() {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white" style={{color: "black"}}>
        <h2 className="text-4xl lg:text-5xl font-bold mb-5 border-b-[5px] w-[350px] mx-auto border-indigo-600 pb-2" style={{fontFamily: "'Montagu Slab', serif"}}>
          Contact Me
        </h2>

        <p className="py-2" style={{fontFamily: "'Lato', sans-serif"}}>
          <span className="font-bold">Email:</span> danalobell@gmail.com
        </p>
      </div>
    </section>
  )
}
