import React from 'react'
import heroImage from '../assets/img.webp'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'

const Home = () => {
    return (
        // <>
        //     <div
        //         name="home"
        //         className="h-screen w-full bg-[#23253a] pt-36 md:pt-0"
        //     >
        //         <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-10">
        //             <div className="flex flex-col justify-center h-full">
        //                 {/* <code className="md:text-5xl rounded-lg p-3 bg-[#3f4268] mt-32 text-4xl font-bold text-yellow-300">
        //                     Embarked on a journey in the realm of <span className='text-red-300'>Web</span> and <span className='text-purple-400'>Blockchain</span> developement
        //                 </code> */}
        //                 <div class="lg:w-[43vw]">
        //                     <div class="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
        //       bg-[#383a5e] pb-6  rounded-lg leading-normal overflow-hidden">
        //                         <div class="top mb-2 flex">
        //                             <div class="h-3 w-3 bg-red-500 rounded-full"></div>
        //                             <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
        //                             <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        //                         </div>
        //                         <div class="mt-4 flex text-xl md:text-4xl">
        //                             <span class="text-green-400">Bhavya:~$</span>
        //                             <p class="flex-1 typing items-center pl-2">
        //                                 Embarked on a journey in the realm of <span className='text-red-300 italic '>Web</span> and <span className='text-blue-300 italic'>Blockchain</span> developement
        //                                 <br />
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <p className="text-gray-300 py-4 max-w-md text-xl font-bold">
        //                     Currently pursuing Bachelor of Technology from Indian Institute of Technology Ropar (IIT Ropar)
        //                 </p>

        //                 <div>
        //                     <Link
        //                         to="projects"
        //                         smooth
        //                         duration={500}
        //                         className="group text-white text-2xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 hover:scale-110 duration-300"
        //                     >
        //                         Projects
        //                         <span className="group-hover:rotate-90 duration-300">
        //                             <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
        //                         </span>
        //                     </Link>

        //                 </div>

        //             </div>

        //             <div>
        //                 <img
        //                     src={heroImage}
        //                     alt="my profile"
        //                     className="rounded-lg mx-auto   bg-[#23253a]"
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </> 
        <div className='max-w-[100vw] bg-[#23253a] pt-28'>
            <div class="max-w-[90vw] bg-[#23253a] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div class="lg:col-span-3">
                        <h1 class="block text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white">Embarked on a journey in the realm of <span className='text-red-300 italic '>Web</span> and <span className='text-blue-300 italic'>Blockchain</span> developement</h1>
                        <p class="mt-3 text-xl text-gray-200">Currently pursuing Bachelor of Technology from Indian Institute of Technology Ropar (IIT Ropar)</p>

                        <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            {/* <div class="w-full sm:w-auto">
          <label for="hero-input" class="sr-only">Search</label>
          <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter work email"/>
        </div> */}
                            <Link
                                to="projects"
                                smooth
                                duration={500}>
                            <div class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white hover:scale-110 duration-300 transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                                Projects
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </div>
                            </Link>
                        </div>



                    </div>


                    <div class="lg:col-span-4 mt-10 lg:mt-0">
                        <img class="w-full rounded-xl" src={heroImage} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home