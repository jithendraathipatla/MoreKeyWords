import React,{useEffect} from 'react';
import ConfigurationPart from '../Components/Tabel';
import Location from '../Components/Location';

const Configuration = () => {
    useEffect(() => {
       document.title="Prestige Waterford Configuration | Prestige Waterford Land Area | Waterford Possession Date";
       window.scrollTo(0,0);
    });
    return (
        <div style={{marginTop:"80px"}}>
            <ConfigurationPart/>
            <br/>
            <hr/>
            <Location/>
            <br/>
        </div>
    );
};

export default Configuration;