import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init.js'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItemS, setMyItems] = useState('');

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyItems(data);
            });
    }, [user]);



    return (
        <div>
            <h2>My Items {myItemS.length}</h2>
        </div>
    );
};

export default MyItems;