import React,{useEffect} from 'react';
import AmenitiesContent from '../Components/Amenities';

const Amenities = () => {
    useEffect(() => {
        document.title="Prestige Waterford Amenities | Waterford Amenities | Apartments in Bangalore";
        window.scrollTo(0,0);
     });
    return (
        <div style={{marginTop:"80px"}}>
           <AmenitiesContent/>
        </div>
    );
};

export default Amenities;