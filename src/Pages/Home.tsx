import React, {useEffect} from 'react';
import SliderComponent from '../Components/Slider';
import DescriptionComponent from '../Components/Description';
import OverView from '../Components/OverviewPart';
import TabelComponent from '../Components/Tabel';
import GalleryComponent from '../Components/Gallery';
import AmenitiesComponent from '../Components/Amenities';


const Home = () => {
    useEffect(() => {
        document.title="Prestige Waterford | Prestige Waterford WhiteField | Waterford Whitefield"
     });
    return (
        <div>
            <SliderComponent/>
            <div className="box">
            <DescriptionComponent/>
            <hr/>
            <OverView/>
            <hr/>
            <TabelComponent/>
            <hr/>
            <AmenitiesComponent/>
            <hr/>
            <GalleryComponent/>
            
            </div>
        </div>
    );
};

export default Home;