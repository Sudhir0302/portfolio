import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {Ban, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Interest } from '../components/Interest';
import Skills from '../components/Skills';
import Project from '../components/Project';
import Extra from '../components/Extra';

const Home = () => {
  // const [show, setShow] = useState(true);
  const [slide,setSlide] = useState(0)

  const array=[<Interest/>,<Skills/>,<Extra />];

  function handleClick() {
    setShow(!show);
  }

  function handleSlideRight(){
    if(slide+1<array.length){
      setSlide(slide+1);
    }
  }

  function handleSlideLeft(){
    if(slide>0){
      setSlide(slide-1);
    }
  }
  const [com,setCom]=useState(null);
  return (
    <>
      <div className="flex justify-center items-start mt-36">
        <div className="ml-44 w-[500px] h-auto bg-gray-700 rounded-3xl text-xl text-white text-justify p-10">
          <h1>
            Hi, I am Sudhir
          </h1>
          <h2>
            A dedicated and results-driven Full Stack Developer with strong expertise
            in Java and React. Seeking to leverage my problem-solving skills and
            technical knowledge in developing scalable and efficient solutions.
          </h2>
        </div>
        <div>
          <div className="ml-44 w-[380px] h-[40px] bg-gray-700 rounded-3xl text-white p-2 mr-44 mt-0 flex flex-row gap-36">
            <CircleArrowLeft onClick={handleSlideLeft} className="text-9xl"/>
            <h1>
              SLIDE
            </h1>
            <CircleArrowRight onClick={handleSlideRight} className="text-9xl"/>
          </div>
          <div className="ml-44 w-auto h-[350px] rounded-3xl bg-gray-700 text-white p-10 mr-44 mt-1 flex flex-row text-xl">
             <>
                {slide<array.length ? array[slide] : array[array.length-1]}
             </>
          </div>  
        </div>
      </div>
      <div className='flex justify-center items-start mt-36'>
        <Project />
      </div>
    </>
  );
}

export default Home;
