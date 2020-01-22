import React from 'react';
import Title from '../Components/Title';
import ComingSoon from '../Images/Coming-Soon-Project-1.jpg';
import Form from '../Components/Form';

const Location = () => {
    return (
        <div className="Location-display">
            <div style={{textAlign:"center", borderRight:"2px solid #eee"}}>
              <Title title="Waterford Location"/>
              <img src={ComingSoon} alt="coming Soon"/>
            </div>
            <div style={{textAlign:"center"}}>
              <Title title="Get In touch With US!!"/>
              <Form/>
            </div>
        </div>
    );
};

export default Location;