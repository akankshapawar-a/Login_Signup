import React from 'react';
const Contact = () => {
  const email = 'akankshapawar131202@gmail.com'; 
  return (
    <div>
         <div className='relative' >
        
        <img
          src="http://mrtaba.ir/image/bg2.jpg"
         
          className='w-full h-80'
          alt="image"
         
        />
  
      </div>
     
      <h1 className='text-center text-gray-500 font-bold text-2xl mt-6'>Contact Us</h1>
     <div className='flex mx-8  justify-center'>
      <p className='flex text-2xl text-gray-600 text-center mt-5 font-bold'> 
        You can reach us via email at{' '} 
      </p>
      <a href={`mailto:${email}`}>
        {/* {email} */}<img  src="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
        className=' w-20 h-20 '
        />
        </a>
        </div>
    </div>
  );
};

export default Contact;
