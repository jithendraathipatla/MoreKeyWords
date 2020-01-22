import React,{useState} from 'react';
import Modalabc from 'react-responsive-modal';
import Form from '../Components/Form';
import Title from '../Components/Title';

const Modal = (props:any) => {
    const [isopen, setisopen] = useState(false);

    return (
        <div>
        <button onClick={() => setisopen(true)} className={props.class}>{props.title}</button>
        <Modalabc open={isopen} onClose={ () => setisopen(false)}>
          <Title title={props.desc}/>
          <Form/>
        </Modalabc>
        </div>
    );
};
    
export default Modal;