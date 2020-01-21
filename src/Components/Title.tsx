import React from 'react';

const Title = (props:any) => {
    return (
        <div style={{padding:"20px 0px", fontSize:"24px", color:"#d4af37"}}>
           <h1>{props.title}</h1>
        </div>
    );
};

export default Title;