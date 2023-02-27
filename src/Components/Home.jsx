import React from 'react';
import { Link } from 'react-router-dom';


const estiloBoton = {
  marginTop: '30px',
  marginLeft: '20px'
}

const estiloBotonDos = {
  marginTop: '30px',
  marginLeft: '20px'
}

const Home = () =>{
    return (
        <div className="App">
          <div className="App-header">
            <h2>Prueba para BLAU</h2>
            <Link to="/slideruno" type="button" className="btn btn-primary" style={estiloBoton}>Ir a Slider 1</Link>
            <Link to="/sliderdos" type="button" className="btn btn-primary" style={estiloBoton}>Ir a Slider 2</Link>
          </div>
        </div>
      );
}

export default Home;