import React from 'react';
import Dealers from '../Dealers/Dealers';
import Banner from '../Home/Banner/Banner';
import InventoryCards from '../Home/InventoryCards/InventoryCards';
import Location from '../Location/Location';
import RecentTranscations from '../RecentTransactions/RecentTranscations';

const Header = () => {
    return (
        <div>
            <Banner />
            <InventoryCards />
            <Dealers />
            <RecentTranscations />
            <Location />
        </div>
    );
};

export default Header;