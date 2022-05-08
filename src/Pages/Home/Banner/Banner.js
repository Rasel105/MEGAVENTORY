import React from 'react';
import Fade from 'react-reveal/Fade';
import banner from '../../../images/banner1.jpg'

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="active relative w-full">
                <Fade right>
                    <img
                        src={banner}
                        className="block w-full md:h-screen"
                        alt=""
                    />
                </Fade>
            </div>

        </div>
    );
};

export default Banner;