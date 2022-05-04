import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js'
import Loading from '../Shared/Loading/Loading';
import signupImages from '../../images/formImages/signup.png'
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.conPass.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else {
            toast.error("Password don't matched", {
                toastId: 'success1',
            });
        }
    };

    switch (error?.code) {
        default:
            // error.message = 'Internal Error'
            break;
        case 'auth/email-already-exists':
            toast.error('Email already exists', {
                toastId: 'success1',
            });
            break;
    };

    if (loading) {
        return <Loading />
    };

    if (user) {
        navigate('/');
    };

    return (
        <div className="container mx-auto min-h-screen">
            <div className="flex justify-center px-6 my-4">
                <div className="w-full xl:w-3/4 lg:w-7 flex">
                    <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                        <img src={signupImages} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 bg-gray-50 p-5 shadow-2xl rounded-lg lg:rounded-l-none">
                        <h3 className="mb-2 text-2xl text-center">Register an Account!</h3>
                        <form onSubmit={handleSignUp} className="px-8 pt-2 pb-8 bg-white rounded">
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                                    Your Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="Name"
                                    name='name'
                                    placeholder="Enter Full Name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                                    Your Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="email"
                                    name='email'
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name='password'
                                    type="password"
                                    placeholder="******************"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Confrim Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name='conPass'
                                    type="password"
                                    placeholder="******************"
                                />
                            </div>
                            <div className="mb-2 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    type="submit"
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
                            <div className='flex items-center justify-center my-2'>
                                <div className='border-2 w-1/2'></div>
                                <p className='text-center mx-2'>or</p>
                                <div className='border-2 w-1/2'></div>
                            </div>
                            {/* <div className="text-center">
                                <button
                                    className="w-full flex justify-evenly items-center px-4 py-2 font-bold text-black rounded-full border-2 bg-white focus:outline-none focus:shadow-outline"
                                    type="button">
                                    <img className='inline' style={{ width: '25px' }} src={google} alt="" />
                                    <span className=''>Sign in with google</span>
                                </button>
                            </div> */}
                            <SocialLogIn />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;