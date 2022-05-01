import React from 'react';
import Dealers from '../Dealers/Dealers';
import Banner from '../Home/Banner/Banner';
import InventoryCards from '../Home/InventoryCards/InventoryCards';
import Footer from '../Shared/Footer.js/Footer';

const Header = () => {
    return (
        <div>
           <Banner/>
           <InventoryCards/>
           <Dealers/>
           <Footer/>
        </div>
    );
};

export default Header;