import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../../images/google/google2.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }
    if (loading) {
        return <Loading />
    };

    let errorTag;
    if (error) {
        switch (error.code) {
            default:
                // error.message = 'Internal Error'
                break;
            case 'auth/user-not-found':
                toast.error('Use not found', {
                    toastId: 'success1',
                });
                break;
        }
    };

    if (user) {
        navigate('/')
    };
    return (
        <div className="text-center mb-3">
            {errorTag}
            <button
                onClick={handleSignInWithGoogle}
                className="w-full flex justify-evenly items-center px-4 py-2 font-bold text-black rounded-full border-2 bg-white focus:outline-none focus:shadow-outline"
                type="button">
                <img className='inline' style={{ width: '25px' }} src={google} alt="" />
                <span className='text-center'>Continue with google</span>
            </button>
            <ToastContainer/>
        </div>
    );
};

export default SocialLogIn;