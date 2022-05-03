import React from 'react';
import Dealers from '../Dealers/Dealers';
import Banner from '../Home/Banner/Banner';
import InventoryCards from '../Home/InventoryCards/InventoryCards';
import RecentTranscations from '../RecentTransactions/RecentTranscations';

const Header = () => {
    return (
        <div>
           <Banner/>
           <InventoryCards/>
           <Dealers/>
           <RecentTranscations/>
        </div>
    );
};

export default Header;