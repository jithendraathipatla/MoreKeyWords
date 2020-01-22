import React,{useEffect} from 'react';
import ConfigurationPart from '../Components/Tabel';

const Configuration = () => {
    useEffect(() => {
       document.title="Prestige Waterford Configuration | Prestige Waterford Land Area | Waterford Possession Date";
       window.scrollTo(0,0);
    });
    return (
        <div style={{marginTop:"80px"}}>
            <ConfigurationPart/>
        </div>
    );
};

export default Configuration;