import React from 'react'
import profileImg from '../img/p.jpg'; 
import { User2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-4 ml-10 mr-10 rounded-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl hover:text-gray-900">
            <img src={profileImg} className="w-[150px] h-[150px] rounded-full"/>
            {/* Sudhir R */}
        </div>
        <div className="space-x-7 text-xl flex justify-end">
          <a href="#home" className="text-white hover:text-gray-900">Home</a>
          <a href="#about" className="text-white hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-900">Contact</a>
          <User2 />
        </div>
      </div>
    </nav>
  )
}

export default Navbar