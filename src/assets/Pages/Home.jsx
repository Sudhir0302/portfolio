import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {Ban, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Interest } from '../components/Interest';
import Skills from '../components/Skills';

const Home = () => {
  const [show, setShow] = useState(true);
  const [slide,setSlide] = useState(false)

  function handleClick() {
    setShow(!show);
  }

  function handleSlide(){
    setSlide(!slide);
  }
  const [com,setCom]=useState(null);
  return (
    <>
      {show && (
        <div className="flex justify-center items-start mt-36">
          <div className="ml-44 w-[500px] h-auto bg-gray-700 rounded-3xl text-xl text-white text-justify p-10">
            <h1>Hi, I am Sudhir</h1>
            <h2>
              A dedicated and results-driven Full Stack Developer with strong expertise
              in Java and React. Seeking to leverage my problem-solving skills and
              technical knowledge in developing scalable and efficient solutions.
            </h2>
          </div>
          <div>
            <div className="ml-44 w-[380px] h-[40px] bg-gray-700 rounded-3xl text-white p-2 mr-44 mt-0 flex flex-row gap-80">
              <CircleArrowLeft onClick={handleSlide} className="text-9xl"/>
              <CircleArrowRight onClick={handleSlide} className="text-9xl"/>
            </div>
            <div className="ml-44 w-auto h-auto rounded-3xl bg-gray-700 text-white p-2 mr-44 mt-1 flex flex-row">
               {slide ===true?
                <><Skills /></> :(<><Interest /></>)}
            </div>  
          </div>
        </div>
      )}
      <div className='w-[80px] h-[60px] flex justify-center items-center mx-auto mt-4'>
        <Ban onClick={handleClick} className='bg-red-900 text-xl w-12 h-12'/>
      </div>
    </>
  );
}

export default Home;
