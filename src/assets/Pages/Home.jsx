import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className='ml-72 mt-36 w-[300px] h-[90px] bg-gray-500 rounded-lg'>
        <h1 className='text-xl text-white'>Hi , I am Sudhir</h1>
      </div>
    </div>
  )
}

export default Home