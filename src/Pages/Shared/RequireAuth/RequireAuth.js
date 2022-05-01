import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
        return <div>
            <h3 className='text-3xl'>Your email is not varified!</h3>
            <h5 className='text-success'>Please Varify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify varification email again

            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;