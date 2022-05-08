import React, { useEffect, useState } from 'react';
import Pulse from 'react-reveal/Pulse';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://thawing-everglades-09724.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            });
    }, []);
    return (
        <>
            <h2 className='text-4xl mx-8 text-center my-2'><span className='text-sky-500/100'>Blogs</span></h2>
            <div className='grid md:grid-cols-2 gap-5 px-5 sm:grid-cols-1'>

                {
                    blogs.map(blog =>
                        <Pulse>
                            <div key={blog._id} className="max-w-sm mx-auto items-center justify-center bg-white rdounde-lg border rounded-lg my-2 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{blog.title}?</h5>
                                    <div className='flex justify-between items-center'>
                                        <p>
                                            {blog.blogdetails}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Pulse>
                    )}
            </div>

        </>
    );
};

export default Blogs;