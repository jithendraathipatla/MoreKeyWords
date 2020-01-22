import React from 'react';

const Form = () => {
    return (
        <div className="card main_Form">
        <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith" />
  </div>

<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
  </div>
</div>
</div>
</div>
        
    );
};

export default Form;