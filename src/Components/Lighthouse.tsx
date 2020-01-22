import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  '../Images/prestige-finsbury-regent1.jpg',
  '../Images/prestige-finsbury-regent2.jpg',
  '../Images/prestige-finsbury-regent3.jpg',
  '../Images/prestige-finsbury-regent4.jpg',
  '../Images/HydeFloor1.jpg',
  '../Images/HydeFloor2.jpg',
  '../Images/HydeFloor3.jpg',
  '../Images/HydeFloor4.jpg',
  '../Images/masterplan-hyde.jpg',
];



const Lighthouse = () => {
  
  const [state, setstate] = useState([{
    name:"Interior First",
    image:'../Images/prestige-finsbury-regent1.jpg',
  },
  {
    name:"Interior Second",
    image: '../Images/prestige-finsbury-regent2.jpg',
  },
  {
    name:"Interior third",
    image: '../Images/prestige-finsbury-regent3.jpg',
  },
  {
    name:"Second Image",
    image: '../Images/prestige-finsbury-regent3.jpg',
  },
  {
    name:"Floor Plan",
    image: '../Images/HydeFloor1.jpg',
  },
  {
    name:"Floor Plan",
    image: '../Images/HydeFloor2.jpg',
  },
  {
    name:"Floor Plan",
    image: '../Images/HydeFloor3.jpg',
  },
  {
    name:"Floor Plan",
    image: '../Images/HydeFloor4.jpg',
  },
  {
  name:"Master Plan",
  image: '../Images/masterplan-hyde.jpg',
 },

 
  ])

  const displayingGallery = () => {
    return state.map((item,i)=>{
      return(
        <div key={i} className="card" style={{paddingBottom:"8px", backgroundColor:"#eee"}}>
          <img src={item.image} alt={item.name} onClick={()=> setisOpen(true)} width="400px"/>
          {item.name}
        </div>
      )
    })
  }
 
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <div className="galleryImages">
     {displayingGallery()}
      </div>
     
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() =>
              setphotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setphotoIndex((photoIndex + 1) % images.length)
            }
          />
        )
        }


    </div>
  );
};

export default Lighthouse;