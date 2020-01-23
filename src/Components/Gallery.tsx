import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import LightHouse from '../Components/Lighthouse';
import firstGallery from '../Images/prestige-finsbury-regent1.jpg';
import secondGallery from '../Images/prestige-finsbury-regent2.jpg';
import thirdGallery from '../Images/prestige-finsbury-regent3.jpg';
import fourthGallery from '../Images/prestige-finsbury-regent4.jpg';

import floorOne from '../Images/HydeFloor1.jpg';
import floorTwo from '../Images/HydeFloor2.jpg';
import floorThree from '../Images/HydeFloor3.jpg';
import floorFour from '../Images/HydeFloor4.jpg';

import masterPlanImage from '../Images/masterplan-hyde.jpg';
import Title from '../Components/Title';


const Gallery = () => {
    const [interior, setinterior] = useState([{
        name:"Interior First",
        image:firstGallery,
      },
      {
        name:"Interior Second",
        image: secondGallery,
      },
      {
        name:"Interior Third",
        image:thirdGallery,
      },
      {
        name:"Interior Fourth",
        image: fourthGallery,
      },
    ])

    const [Exterior, setExterior] = useState([
      {
        name:"Interior third",
        image: thirdGallery,
      },
      {
        name:"Second Image",
        image: fourthGallery,
      },
    ]);


    const [floorPlan, setfloorPlan] = useState([{
        name:"Floor Plan First",
        image:floorOne,
      },
      {
        name:"Floor Plan Second",
        image: floorTwo,
      },
      {
        name:"Floor Plan third",
        image: floorThree,
      },
      {
        name:"Floor Plan Image",
        image: floorFour,
      },
    ]);

    const [masterPlan, setmasterPlan] = useState([{
        name:"Master Plan",
        image:masterPlanImage,
      },
     
    ])
    
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Waterford Gallery"/>
            <br/>
            <div  className="galleryImages">
             <div style={{borderRight:"1px solid #eee", paddingRight:"10px"}} id="border2">
              <TitleComponent title="Waterford Interior"/>
            <LightHouse images={[firstGallery, secondGallery, thirdGallery, fourthGallery]} state={interior} />
            </div>
            <div className="galleryInternalClassOne">
            <div style={{borderRight:"1px solid #eee", paddingRight:"10px"}}  id="border3">
              <TitleComponent title="Waterford Exterior"/>
            <LightHouse images={[firstGallery, secondGallery, thirdGallery, fourthGallery]} state={interior} />
            </div>
            </div>
            <div >
              <TitleComponent title="Waterford FloorPlan"/>
            <LightHouse images={[floorOne, floorTwo, floorThree, floorFour]} state={floorPlan} />
            </div>
           </div>

           <br/>

           <hr/>
           <TitleComponent title="Waterford MasterPlan"/>
           <div className="masterplan_main">
            <div></div>
            <div>
            <LightHouse images={[masterPlanImage]} state={masterPlan} />
            </div>
            <div></div>
            
           </div>
            </div>
            <br/>
        </div>
    );
};

export default Gallery;