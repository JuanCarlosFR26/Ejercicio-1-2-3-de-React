import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto';


const Componentb = ({ contacto }) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>

            <h2>
                Apellido: { contacto.apellido }
            </h2>
            <h3>
                Email: { contacto.email }
            </h3>
            <h4>
                Conectado: { contacto.conectado ? 'Contacto en Línea' : 'Contacto no disponible' }
            </h4>
        </div>
    );
};


Componentb.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default Componentb;
