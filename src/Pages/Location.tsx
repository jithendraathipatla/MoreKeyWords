import React,{useEffect} from 'react';
import GalleryComponent from '../Components/Gallery';

const Location = () => {
    useEffect(() => {
        document.title="Prestige Waterford Location | Waterford Location | Best Apartments in Whitefield";
        window.scrollTo(0,0);
     });
    return (
        <div>
            <GalleryComponent/>
        </div>
    );
};

export default Location;