import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'; //Importando hooks


function App() {

  const [numClicks, setNumClicks] = useState(0); //este 0 es el valor inicla de numClicks

  const manejarClick = () => {
    setNumClicks(numClicks + 1);

  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>

        <Contador 
        numClicks={numClicks}/>

        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
        <div className='footer'> 
        &copy;Sebastian Paternostro 2023
      </div>
      </div>
      
    </div>
  );
}

export default App;
