import React, {useState} from 'react';

const Form = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();

  const handelnameChange = (e:any) => {
    const name = e.target.value;
    setname(name);
  }

  const handelemailChange = (e:any) => {
    const email = e.target.value;
    setemail(email);
  }

  const handelphoneChange = (e:any) => {
    const phone = e.target.value;
    setphone(phone);
  }



  const handelingFormdata = (e:any) => {
    e.preventDefault();
    if(phone.length > 10){
      alert('Must enter a Valid Number');
      e.target.reset();
    }
    console.log(name, email, phone);

  }

    return (
      <form onSubmit={handelingFormdata} name="main_forma">

    <div className="main_Form">
  <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" name="name" required value={name} onChange={handelnameChange} placeholder="e.g Alex Smith" />
  </div>
  </div>
  

  <div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" name="email" required value={email} onChange={handelemailChange} placeholder="e.g. alexsmith@gmail.com"/>
  </div>
  </div>

  <div className="field">
  <label className="label">Phone Number</label>
  <div className="control">
    <input className="input" type="number" name="phone" required maxLength={10} value={phone} onChange={handelphoneChange} placeholder="e.g. 999999999"/>
  </div>
  </div>
  <br/>
  <button className="button is-warning is-light">Submit</button>
  </div>
  </form>
        
    );
};

export default Form;