import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
        <a href="/" className="text-4xl text-accent" style={{fontFamily: "'Montagu Slab', serif"}}>
            DL
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block" style={{fontFamily: "'Lato', sans-serif"}}>
            <ul className='flex'>
                <li>
                    <a href="/#about">About</a>
                </li>
                <li>
                    <a href="/#projects">Projects</a>
                </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1_wR5hqToAAHfA9nEwnvywWfn8vlNHI5e/view?usp=sharing" target='_blank' without rel="noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>

        {/* Mobile Nav */}
        <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"} style={{fontFamily: "'Lato', sans-serif"}}>
            <ul className="flex flex-col">
                <li>
                    <a href="/#about" onClick={handleToggle}>About</a>
                </li>
                <li>
                    <a href="/#projects" onClick={handleToggle}>Projects</a>
                </li>
                <li>
                    <a href="/#contact" onClick={handleToggle}>Contact</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1_wR5hqToAAHfA9nEwnvywWfn8vlNHI5e/view?usp=sharing" target="_blank" onClick={handleToggle}>Resume</a>
                </li>
            </ul>
        </nav>

        {/* Toggle button */}
        <button onClick={handleToggle} className="block md:hidden" style={{color: "black"}}>
            {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
    </header>
  )
}
