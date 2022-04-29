import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google2.png'
import login from '../../images/login.jpg'


const Login = () => {
    return (
        <div className="container mx-auto min-h-screen">
            <div className="flex justify-center px-6 my-2">
                <div className="w-full xl:w-3/4 lg:w-7 flex">
                    <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                        <img src={login} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 bg-gray-50 p-5 shadow-2xl rounded-lg lg:rounded-l-none">
                        <h3 className="mb-2 text-2xl text-center">Welcome Back!</h3>
                        <form className="px-8 pt-3 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                                    Username
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="name"
                                    placeholder="Username"
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
                                <p className="text-xs italic text-red-500">Please choose a password.</p>
                            </div>
                            <div className="mb-7 flex justify-between">
                                <div>
                                    <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                    <label className="text-sm" for="checkbox_id">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./forgot-password.html"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <div className="mb-3 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Login
                                </button>
                            </div>
                            <hr className="mb-2 border-t" />
                            <div className="text-center">
                                <button
                                    className="w-full flex justify-evenly items-center px-4 py-2 font-bold text-white rounded-full border-2 bg-blue-400 focus:outline-none focus:shadow-outline"
                                    type="button">
                                    <img className='inline' style={{ width: '25px' }} src={google} alt="" />
                                    <span className='text-center'>Continue with google</span>
                                </button>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <div className='border-2'></div>
                                <p className='text-center'>or</p>
                                <div className='border-2'></div>
                            </div>
                            <div className="mb-2 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Create an Account
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;