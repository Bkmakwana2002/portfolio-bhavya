import React from 'react'
import Chat from '../assets/projects/chat.png'
import videoSharing from '../assets/projects/video-sharing.png'
import Reddit from '../assets/projects/Reddit.png'
import crypto from '../assets/projects/crypto.png'
import dalle from '../assets/projects/dalle.png'
import { BsGithub } from 'react-icons/bs'
import web3 from '../assets/projects/web.png'

const Projects = () => {

  const portfolios = [
    {
      id: 1,
      src: dalle,
      name: "AI Image Generator",
      link: 'https://github.com/Bkmakwana2002/Share-Image-AI'
    },
    {
      id: 2,
      src: crypto,
      name: "Crypto Insider",
      link: 'https://github.com/Bkmakwana2002/CryptoInsider'
    },
    {
      id: 3,
      src: web3,
      name: "Web 3.0 BlogPost",
      link: 'https://github.com/Bkmakwana2002/web3.0-blogpost'
    },
    {
      id: 4,
      src: Chat,
      name: "Chatter's Paradise",
      link: 'https://github.com/Bkmakwana2002/Chatters-paradise'
    },
    {
      id: 5,
      src: Reddit,
      name: "Reddit Clone",
      link: 'https://github.com/Bkmakwana2002/reddit-clone'
    },
    {
      id: 6,
      src: videoSharing,
      name: "Video Sharing App",
      link: 'https://github.com/Bkmakwana2002/video-sharing'
    },
  ]

  return (
    <div
      name="projects"
      className="bg-[#23253a] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl md:text-6xl font-bold inline">
            Projects
          </p>
          <p className="text-2xl py-6 text-white md:text-4xl border-b-2">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, link }) => (
            <div key={id} className="shadow-md rounded-lg border-2 border-white hover:scale-105 duration-300">
              <img
                src={src}
                alt=""
                className="rounded-md"
              />
              <div className="flex items-center justify-center mx-5 space-x-5">
                <p>{name}</p>
                <a href={link} target={'_blank'} className="px-6 py-3 m-4 duration-200 hover:scale-105">
                  <BsGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects