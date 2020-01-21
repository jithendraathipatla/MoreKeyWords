import React from 'react';
import Lightbox from 'react-lightbox-component';
import FirstImage from '../Images/svg/tennis-court.svg'

const Lighthouse = () => {
    return (
        <div>
            <Lightbox images={
        [
        {
          src: FirstImage,
          title: 'image title',
          description: 'image description'
        },
        {
            src: FirstImage,
            title: 'image title',
            description: 'image description'
        },
        {
            src: FirstImage,
            title: 'image title',
            description: 'image description'
        }
      ]
    }/>
        </div>
    );
};

export default Lighthouse;