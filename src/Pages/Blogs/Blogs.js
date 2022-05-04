import React, { useEffect, useState } from 'react';

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
            <div className='grid md:grid-cols-2 gap-5 px-5 sm:grid-cols-1'>
                {
                    blogs.map(blog =>
                        <div className="max-w-sm mx-auto items-center justify-center bg-white rdounde-lg border rounded-lg my-2 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">{blog.title}?</h5>
                                <div className='flex justify-between items-center'>
                                    <p>
                                        {blog.blogdetails}
                                    </p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default Blogs;