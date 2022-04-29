import React from 'react';
import Banner from '../Home/Banner/Banner';
import InventoryCards from '../Home/InventoryCards/InventoryCards';

const Header = () => {
    return (
        <div>
           <Banner/>
           <InventoryCards/>
        </div>
    );
};

export default Header;