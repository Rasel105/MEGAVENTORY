import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="container mx-auto min-h-screen">
        <div className="flex justify-center px-6 my-4">
            <div className="w-full xl:w-3/4 lg:w-7 flex">
                <div className="w-full h-aut hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                    <img src="" alt="" />
                </div>
                <div className="w-full lg:w-1/2 bg-gray-50 p-5 shadow-2xl rounded-lg lg:rounded-l-none">
                    <h3 className="mb-3 text-2xl text-center">Welcome Back!</h3>
                    <form className="px-8 pt-3 pb-8bg-white rounded">
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                                Your Name
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="name"
                                type="Name"
                                placeholder="Enter Full Name"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                                Your Email
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                             Confrim Password
                            </label>
                            <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="confirm_password"
                                type="password"
                                placeholder="******************"
                            />
                        </div>
                        <div className="mb-2">
                            <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                            <label className="text-sm" for="checkbox_id">
                                Remember Me
                            </label>
                        </div>
                        <div className="mb-5 text-center">
                            <button
                                className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Create an Account
                            </button>
                        </div>
                        <hr className="mb-3 border-t" />
                        <div className="text-center">
                            <span>Already have an Account? </span>
                            <Link to="/login"
                                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                            >
                                Login!
                            </Link>
                        </div>
                        <div className="text-center">
                            <a
                                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                href="./forgot-password.html"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;