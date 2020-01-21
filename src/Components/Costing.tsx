import React from 'react';
import CardComponent from './Card';
import Title from './Title';

const Costing = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Title title="Waterford Pricing"/>
            </div>
            <div className="pricing">
            <CardComponent BHK="2 BHK"/>
            <CardComponent BHK="3 BHK"/>
            <CardComponent BHK="4 BHK"/>
            </div>
        </div>
    );
};

export default Costing;