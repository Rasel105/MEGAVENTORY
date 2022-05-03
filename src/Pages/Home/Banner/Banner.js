import React from 'react';
import banner from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div class="relative w-full overflow-hidden">
            <div class="active relative w-full">
                <img
                    src={banner}
                    class="block w-full md:h-screen"
                    alt=""
                />
            </div>

        </div>
    );
};

export default Banner;