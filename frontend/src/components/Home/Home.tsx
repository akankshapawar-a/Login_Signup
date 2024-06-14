import React from 'react'
const Home = () => {
  return (
    <>
    <div className='relative' >
        
      <img
        src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
       
        className='w-full h-96'
        alt="image"
       
      />

    </div>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white '>
        <h1 className='font-bold text-6xl uppercase'>WelCome</h1>
        <p className='text-2xl text-black bg-white'>To Our Website</p></div>
    </>
  )
}

export default Home