import React from 'react';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';

const Location = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {

    };
    return (
        // update location
        <div className='container w-11/12 mx-auto my-10'>
            <h2 className='text-center text-4xl my-6'>Our <span className='text-sky-400'>Location</span></h2>
            <Fade right>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 bg-slate-100 p-4 rounded'>
                    <div className=''>
                        <div style={{ width: "100%" }}>
                            <iframe width="100%" height="500" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dhaka,%20bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">GPS</a></iframe>
                        </div>
                    </div>
                    <div className='mb-10'>
                        <h3 className='text-center text-3xl my-3 text-gray-700'>Let's <span className='text-sky-400'>Discuss</span></h3>
                        <div className='p-3 rounded-xl'>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                                <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
                                <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' type="text" placeholder='Name' {...register("title", { required: true })} />
                                <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
                                <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' type="email" placeholder='Email' {...register("title", { required: true })} />
                                <label className="block mb-2 text-sm font-bold text-gray-700">Message</label>
                                <textarea className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Message' type="text" {...register("blogdetails", { required: true })} />
                                <div className='flex justify-end'>
                                    <button className='bg-sky-500/100 hover:bg-blue-800 py-2 px-4 mt-2 rounded-lg text-xl mx-2 text-white' type='submit'>
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div >
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Location;