import React from 'react';
import banner from '../../../images/banner1.jpg'

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="active relative w-full">
                <img
                    src={banner}
                    className="block w-full md:h-screen"
                    alt=""
                />
            </div>

        </div>
    );
};

export default Banner;