import React from 'react';
import '../stylesheets/Boton.css'

function Boton({ texto, esBotonDeClick, manejarClick }) { //sintaxis de desestructuracion. en vez de props y dsp props.n, pasamos {nombre de propiedad(es)}
    return (
        <button
        className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' } onClick={manejarClick} 
        >
            {texto} 
        </button>
    );
}

export default Boton;