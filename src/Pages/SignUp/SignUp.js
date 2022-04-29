import React from 'react';
import { Link } from 'react-router-dom';
import signup from '../../images/signup.png'
import google from '../../images/google2.png'

const SignUp = () => {
    return (
        <div className="container mx-auto min-h-screen">
            <div className="flex justify-center px-6 my-4">
                <div className="w-full xl:w-3/4 lg:w-7 flex">
                    <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                        <img src={signup} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 bg-gray-50 p-5 shadow-2xl rounded-lg lg:rounded-l-none">
                        <h3 className="mb-2 text-2xl text-center">Register an Account!</h3>
                        <form className="px-8 pt-2 pb-8 bg-white rounded">
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
                                    className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="confirm_password"
                                    type="password"
                                    placeholder="******************"
                                />
                            </div>
                            <div className="mb-2 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Create an Account
                                </button>
                            </div>
                            <div className="text-center">
                                <span>Already have an Account? </span>
                                <Link to="/login"
                                    className="inline-block text-sm text-blue-500 align-baseline underline hover:text-blue-800">
                                    Login!
                                </Link>
                            </div>
                            <p className='text-center mb-1'>or</p>
                            <div className="text-center">
                                <button
                                    className="w-full flex justify-evenly items-center px-4 py-2 font-bold text-black rounded-full border-2 bg-white focus:outline-none focus:shadow-outline"
                                    type="button">
                                    <img className='inline' style={{width: '25px'}} src={google} alt="" />
                                    <span className=''>Sign in with google</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;