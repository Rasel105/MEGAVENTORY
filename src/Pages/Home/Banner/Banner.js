import React from 'react';
import banner from  '../../../images/banner.jpg'

const Banner = () => {
    return (
       <div className='w-full h-auto '>
           <img className='min-h-screen object-cover' src={banner} alt="" />
       </div>
    );
};

export default Banner;