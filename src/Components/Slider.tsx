import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import FirstSliderImage from '../Images/waterford_slider_first.jpg';
import SecondSliderImage from '../Images/waterford_slider_two.jpg';
import ThirdSliderImage from '../Images/waterford_slider_three.jpg';
import FourthSliderImage from '../Images/waterford_slider_four.jpg';

const Slider = () => {
    return (
        <div>
           <AwesomeSlider style={{height:"70vh"}}>
             <div data-src={FirstSliderImage} />
             <div data-src={SecondSliderImage} />
             <div data-src={ThirdSliderImage} />
             <div data-src={FourthSliderImage} />
            </AwesomeSlider> 
        </div>
    );
};

export default Slider;