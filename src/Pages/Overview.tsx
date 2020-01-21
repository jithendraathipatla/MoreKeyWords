import React,{useEffect} from 'react';
import DescriptionComponent from '../Components/Description';
import OverviewComponent from '../Components/OverviewPart';

const Overview = () => {
    useEffect(() => {
        document.title="Apartments in Whitefield | Waterford Apartments in Whitefield | Prestige properties"
     });
    return (
        <div style={{marginTop:"80px"}}>
           <DescriptionComponent/>
           <br/>
           <OverviewComponent/>
        </div>
    );
};

export default Overview;