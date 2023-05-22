import React from 'react'
import { SiMongodb, SiNodedotjs, SiFirebase, SiCplusplus, SiSolidity,SiNextdotjs,SiPython } from 'react-icons/si'
import { DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di'

const TechStack = () => {
  return (
    <div className='bg-[#23253a]' name="tech">
      <div className='max-w-4xl mx-auto justify-center py-12'>
        <p className='text-white text-4xl text-center font-bold'>
          Technologies I Use
        </p>
        <div className='flex flex-wrap justify-center pt-2'>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <SiNextdotjs className='mx-auto text-gray-400 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> NextJs </p>
          </div>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-green-100 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <SiMongodb className='mx-auto text-green-400 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> MongoDb </p>
          </div>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-green-200 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <SiNodedotjs className='mx-auto text-green-700 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> NodeJS </p>
          </div>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-yellow-100 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <SiFirebase className='mx-auto text-yellow-300 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Firebase </p>
          </div>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-red-200 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <DiHtml5 className='mx-auto text-red-500 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> HTML </p>
          </div>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-blue-200 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <DiCss3 className='mx-auto text-blue-500 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> CSS </p>
          </div>

        </div>
      </div>
      <div className='max-w-4xl mx-auto justify-center py-12' id="tech">
        <p className='text-4xl text-white text-center font-bold'>
          Languages in which I am proficient with
        </p>
        <div className='flex flex-wrap justify-center pt-2'>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-blue-100 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <SiCplusplus className='mx-auto text-blue-400 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> C++ </p>
          </div>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-yellow-100 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <DiJavascript className='mx-auto text-yellow-400 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> JavaScript </p>
          </div>
          <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-blue-200 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <SiPython className='mx-auto text-gray-800 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Python </p>
          </div>
           <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-100 shadow-2xl rounded-xl sm:w-52 hover:scale-110 duration-300'>
            <SiSolidity className='mx-auto text-gray-800 text-4xl' />
            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'> Solidity </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack