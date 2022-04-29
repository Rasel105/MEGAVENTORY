import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded-md shadow-lg text-black w-full">
                    <h1 className="mb-4 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-gray-300  w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Enter Full Name" />

                    <input
                        type="text"
                        className="block border border-gray-300  w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Enter Email" />

                    <input
                        type="password"
                        className="block border border-gray-300  w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        className="block border border-gray-300  w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        <span>By signing up, you agree to the </span>
                        <Link to='/login' className="no-underline border-b border-gray-400 text-gray-500" href="#">
                            Terms of Services
                        </Link> <span>and </span>
                        <Link to="/signup" className="no-underline border-b border-gray-400 text-gray-500" href="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div className="text-gray-900 mt-3">
                    <span>Already have an account? </span>
                    <Link to="/login" className="no-underline border-b border-blue-200 text-blue" href="../login/">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    );
};

export default Login;