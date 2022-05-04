import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn';
import loginImage from '../../images/formImages/login.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // console.log(error);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading />
    };

    const handleLogin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        await signInWithEmailAndPassword(email, password);

        const {data} = await axios.post('http://localhost:5000/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

        // fetch('http://localhost:5000/login', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email }),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         localStorage.setItem('accessToken', data.accessToken);
        //         navigate(from, { replace: true });
        //         console.log('Success:', data);
        //     })
    };

    const handleResetPassword = async (e) => {
        const email = e.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Please check your email');
        }
        else {
            toast('Enter email first');
        }
    }

    if (user) {
        // navigate(from, { replace: true });
    };

    // let errorTag;
    switch (error?.code || error1?.code) {
        default:
            // error.message = 'Internal Error'
            break;
        case 'auth/user-not-found':
            toast.error('Use not found', {
                toastId: 'success1',
            });
            break;
        case 'auth/email-already-exists':
            toast.error('Email already exists', {
                toastId: 'success1',
            });
            break;
        case 'auth/invalid-email':
            toast.error('Invalid email', {
                toastId: 'success1',
            });
            break;
        case 'auth/wrong-password':
            toast.error('wrong-password', {
                toastId: 'success1',
            });
            break;
    };


    return (
        <div className="container mx-auto min-h-screen">
            <div className="flex justify-center px-6 my-2">
                <div className="w-full xl:w-3/4 lg:w-7 flex">
                    <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 bg-gray-50 p-5 shadow-2xl rounded-lg lg:rounded-l-none">
                        <h3 className="mb-2 text-2xl text-center">Welcome Back!</h3>
                        <form onSubmit={handleLogin} className="px-8 pt-3 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    name="password"
                                    type="password"
                                    placeholder="******************"
                                />
                            </div>
                            <div className="mb-7 flex justify-between">
                                <div>
                                    <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                    <label className="text-sm" htmlFor="checkbox_id">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button onClick={handleResetPassword}
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            </div>
                            <div className="mb-3 text-center">
                                {/* <p className='text-red-700 mb-2'>{error?.message}</p> */}
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                            <div className='flex flex-row justify-center mb-2'>
                                <div className='border-2'></div>
                                <p className='text-center'>or</p>
                                <div className='border-2'></div>
                            </div>

                            {/* <div className="text-center mb-3">
                                <button
                                    className="w-full flex justify-evenly items-center px-4 py-2 font-bold text-black rounded-full border-2 bg-white focus:outline-none focus:shadow-outline"
                                    type="button">
                                    <img className='inline' style={{ width: '25px' }} src={google} alt="" />
                                    <span className='text-center'>Continue with google</span>
                                </button>
                            </div> */}
                            <SocialLogIn />

                            <div className="mb-2 text-center">
                                <Link to="/signup"
                                    className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Create an Account
                                </Link>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;