import React from 'react';

const Card = (props:any) => {
    return (
    <div className="box">
     <div className="media-content">
      <div className="content" style={{textAlign:"center", padding:"40px 0px"}}>
        <h1 style={{fontSize:"20px"}}>{props.BHK}</h1>
        <br/>
       
        <button className="button is-danger is-light">Know More!!</button>
      </div>
      </div>
      </div>
     
    );
};

export default Card;