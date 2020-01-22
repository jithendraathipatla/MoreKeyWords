import React,{useEffect} from 'react';
import GalleryComponent from '../Components/Gallery';

const Gallery = () => {
    useEffect(() => {
        document.title="Prestige Waterford Gallery | Prestige Waterford Floor Plan | Waterford Master Plan";
        window.scrollTo(0,0);
     });
    return (
        <div>
            <GalleryComponent/>
        </div>
    );
};

export default Gallery;