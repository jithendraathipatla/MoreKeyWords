import React from 'react';

const Form = () => {
    return (
    <div className="main_Form">
        
        <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith" />
  </div>
  </div>
  

<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
  </div>
</div>

<div className="field">
  <label className="label">Phone Number</label>
  <div className="control">
    <input className="input" type="number" placeholder="e.g. 999999999"/>
  </div>
</div>

<br/>
<button className="button is-warning is-light">Submit</button>
</div>
        
    );
};

export default Form;