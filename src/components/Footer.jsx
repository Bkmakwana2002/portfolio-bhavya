import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs"


const Footer = () => {
    return (
        <div className='py-5 border-t-3/2 bg-[#23253a]'>
            <div className='flex justify-center mt-4 bg- rounded-2xl w-2/3 mx-auto'>
                <a className='text-xl text-gray-800 hover:bg-gray-500 rounded-full hover:text-white p-1 m-1 sm:m-2 sm:p-2 transition-colors duration-200' href='https://github.com/Bkmakwana2002'>
                    <FaGithub color='white'className='text-4xl'/>
                </a>
                <a className='text-xl text-blue-400 hover:bg-gray-500 rounded-full hover:text-blue-200 p-1 m-1 sm:m-2 sm:p-2 transition-colors duration-200' href='https://www.linkedin.com/in/bhavya-kumar-makwana-547466217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZxief6WoRJmDLrOsXoMd'>
                    <FaLinkedin className='text-4xl'/>
                </a>
                <a className='text-xl text-green-400 hover:bg-gray-500 rounded-full hover:text-green-200 p-1 m-1 sm:m-2 sm:p-2 transition-colors duration-200' href='mailto:onlybkm2002@gmail.com'>
                    <FaEnvelope className='text-4xl'/>
                </a>
                <a className='text-xl text-red-400 hover:bg-gray-500 rounded-full hover:text-red-200 p-1 m-1 sm:m-2 sm:p-2 transition-colors duration-200' href = "https://drive.google.com/file/d/1qPxLSFWfqVW-aOAWVsPYidOs4zqWo7v2/view">
                    <BsFillPersonLinesFill className='text-4xl'/>
                </a>
            </div>
        </div>
    )
}

export default Footer