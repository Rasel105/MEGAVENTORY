import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams;
    
    return (
        <div>
            <h3>This is inventory page</h3>
        </div>
    );
};

export default Inventory;