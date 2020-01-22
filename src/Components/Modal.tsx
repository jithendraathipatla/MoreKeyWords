import React from 'react';
import Form from '../Components/Form';

const Modal = (props:any) => {
    return (
        <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
           <p className="modal-card-title">{props.title}</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
           <Form/>
          </section>
          
        </div>
      </div>
    );
};

export default Modal;