import React from 'react';
import { Contacto } from './../models/contacto';
import Componentb from './ComponentB';


const Componenta = () => {

    const newContact = new Contacto('Juan','Fernández','jfernandez@gmail.com', false);

    return (
        <div>
            <h1>
                Usuario:
            </h1>
            <Componentb contacto={newContact}/>
        </div>
    );
};



export default Componenta;
