import React, {useEffect} from 'react';
import SliderComponent from '../Components/Slider';
import DescriptionComponent from '../Components/Description';
import OverView from '../Components/OverviewPart';
import TabelComponent from '../Components/Tabel';
import GalleryComponent from '../Components/Gallery';
import AmenitiesComponent from '../Components/Amenities';
import Location from '../Components/Location';


const Home = () => {
    useEffect(() => {
        document.title="Prestige Waterford | Prestige Waterford WhiteField | Waterford Whitefield";
        window.scrollTo(0,0);
     });
    return (
        <div>
            <div style={{marginTop:"74px"}}>
            <SliderComponent/>
            </div>
            <div className="box">
            <DescriptionComponent/>
            <hr/>
            <OverView/>
            <hr/>
            <TabelComponent/>
            <hr/>
            
            <GalleryComponent/>
            <hr/>
            <AmenitiesComponent/>
            <hr/>
             <Location/>
            </div>
        </div>
    );
};

export default Home;