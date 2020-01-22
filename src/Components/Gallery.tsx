import React from 'react';
import TitleComponent from '../Components/Title';
import LightHouse from '../Components/Lighthouse';

const Gallery = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Waterford Gallery"/>
            <br/>
           <LightHouse/>
            </div>
            <br/>
        </div>
    );
};

export default Gallery;