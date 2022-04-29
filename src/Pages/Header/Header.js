import React from 'react';
import Banner from '../Home/Banner/Banner';
import InventoryCards from '../Home/InventoryCards/InventoryCards';
import Footer from '../Shared/Footer.js/Footer';

const Header = () => {
    return (
        <div>
           <Banner/>
           <InventoryCards/>
           <Footer/>
        </div>
    );
};

export default Header;