import React from 'react';
import TitleComponent from '../Components/Title';

const Tabel = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Waterford Configuration"/>
            </div>
            <br/>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead >
    <tr className="is-selected" style={{backgroundColor:"rgba(216, 198, 127,222)", border:"3px solid #eee"}}>
      <th>Project</th>
      <th>Configuration</th>
      <th>Unit Carpet (Sq.Ft)</th>
      <th>Price</th>
    </tr>
  </thead>
 
  <tbody>
    <tr>
    <td rowSpan={6}><br/>
    <br/>WaterFord</td>
    </tr>
    <tr>
    <td>1 BHk Small</td>
    <td>Click To Know More</td>
     <td>Click To Know More</td>
    
    </tr>
    <tr>
     <td>1 BHK Large</td>
     <td>Click To Know More</td>
     <td>Click To Know More</td>
    
    </tr>
    <tr>
     <td>2 BHk</td>
     <td>Click To Know More</td>
     <td>Click To Know More</td>
    
    </tr>
    <tr>
     <td>3 BHK</td>
     <td>Click To Know More</td>
     <td>Click To Know More</td>
 
    </tr>
    <tr>
     <td>4 BHK</td>
     <td>Click To Know More</td>
     <td>Click To Know More</td>
    
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default Tabel;