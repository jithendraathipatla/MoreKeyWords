import React from 'react';
import DescriptionComponent from '../Components/Description';
import OverviewComponent from '../Components/OverviewPart';

const Overview = () => {
    return (
        <div style={{marginTop:"80px"}}>
           <DescriptionComponent/>
           <br/>
           <OverviewComponent/>
        </div>
    );
};

export default Overview;