import React from 'react'
import heroImage from '../assets/img.webp'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#23253a]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-10">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="md:text-6xl mt-32 text-4xl font-bold text-yellow-300">
                        I'm a Full Stack Web and Blockchain Developer
                    </h2>
                    <p className="text-gray-300 py-4 max-w-md text-xl">
                    Currently pursuing Bachelor of Technology from Indian Institute of Technology Ropar (IIT Ropar) 
                    </p>

                    <div>
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="group text-white text-2xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 hover:scale-110 duration-300"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src={heroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-3/4 md:w-4/5 bg-[#23253a]" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home