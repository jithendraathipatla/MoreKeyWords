import React from 'react';
import TitleComponent from '../Components/Title';
import ComingSoon from '../Images/Coming-Soon-Project-1.jpg';

const Gallery = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Waterford Gallery"/>
            <img src={ComingSoon} alt="commingsoon"/>
            </div>
            <br/>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Waterford Location"/>
            <img src={ComingSoon} alt="commingsoon"/>
            </div>
        </div>
    );
};

export default Gallery;