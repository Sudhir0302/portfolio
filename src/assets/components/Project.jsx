import React from 'react'

const Project = () => {
  return (
    <div className='flex justify-between items-start gap-9 ml-32 mr-32'>
        <div className='bg-gray-700 w-[400px] h-[500px] rounded-3xl text-xl text-white text-justify p-10'>
            <h1>
                Chat Application
            </h1>
            <p className='text-lg'>
                Developed a real-time chat application leveraging React.js for the frontend and Node.js for the backend,
                with Socket.io for efficient, bidirectional communication between the client and server. Implemented
                features include user authentication, live message updates without page refresh, and a responsive chat
                interface. The application enables multiple users to interact in real-time, with messages being displayed
                instantly in chat rooms.
            </p>
        </div>
        <div className='bg-gray-700 w-[400px]  h-[500px] rounded-3xl text-xl text-white text-justify p-10'>
            <h1>
                Weather Forecasting Application
            </h1>
            <p className='text-lg   '>
            Developed a Weather Forecasting Application in Java that fetches real-time weather data based on
            user-selected locations using third-party APIs. The app displays current conditions, temperature, humidity,
            and short-term forecasts. Java’s networking libraries were used to handle API requests, and
            JSON parsing was used to display the weather information. The application includes error handling
            for API issues and ensures responsiveness with multithrea   ding.
            </p>
        </div>
        <div className='bg-gray-700 w-[400px]  h-[500px] rounded-3xl text-xl text-white text-justify p-10'>
            <h1>
                Project3
            </h1>
            <p className='text-lg'>
                Developed a real-time chat application leveraging React.js for the frontend and Node.js for the backend,
                with Socket.io for efficient, bidirectional communication between the client and server. Implemented
                features include user authentication, live message updates without page refresh, and a responsive chat
                interface. The application enables multiple users to interact in real-time, with messages being displayed
                instantly in chat rooms.
            </p>
        </div>
    </div>
  )
}

export default Project