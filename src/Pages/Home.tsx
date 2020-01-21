import React from 'react';
import SliderComponent from '../Components/Slider';
import DescriptionComponent from '../Components/Description';
import OverView from '../Components/OverviewPart';
import TabelComponent from '../Components/Tabel';
import GalleryComponent from '../Components/Gallery';
import AmenitiesComponent from '../Components/Amenities';

const Home = () => {
    return (
        <div>
            <SliderComponent/>
            <div className="box">
            <DescriptionComponent/>
            <OverView/>
            <TabelComponent/>
            <AmenitiesComponent/>
            <GalleryComponent/>
            
            </div>
        </div>
    );
};

export default Home;