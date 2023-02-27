import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import SliderUno from "../Components/SliderUno";
import SliderDos from "../Components/SliderDos";
import { faCameraRetro, faSquare, faCircle } from "@fortawesome/free-solid-svg-icons";


function RoutesApp () {
    const slideUno = {
      icono: faCameraRetro,
      tituloUno: "Título a describir producto y/o servicio a través props objeto",
      imagen: "https://ichef.bbci.co.uk/news/640/cpsprodpb/18504/production/_90488599_thinkstockphotos_gato6.jpg",
      tituloDos: "Segundo título variable a través de props",
      descripcion: "Texto de descripción a través de props",
      descripcionModal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    } 

    const slideDos = {
      iconoDos: faCameraRetro,
      tituloTres: "Otro Título a describir producto y/o servicio a través props objeto",
      imagenDos: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1653670028.jpg?resize=640:*",
      tituloCuatro: "Segundo título variable a través de props",
      descripcionDos: "Texto de descripción a través de props",
      descripcionModalDos: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    } 

    const slideTres = {
      iconoTres: faCameraRetro,
      tituloCinco: "Título diferente a describir producto y/o servicio a través props objeto",
      imagenTres: "https://ichef.bbci.co.uk/news/640/cpsprodpb/E8C4/production/_90488595_thinkstockphotos_gato5.jpg",
      tituloSeis: "Segundo título variable a través de props",
      descripcionTres: "Texto de descripción a través de props",
      descripcionModalTres: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    } 
    return(
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/slideruno' element={<SliderUno tituloUno={slideUno.tituloUno} icono={slideUno.icono} tituloDos={slideUno.tituloDos}
        imagen={slideUno.imagen} descripcion={slideUno.descripcion} descripcionModal={slideUno.descripcionModal}
        tituloTres={slideDos.tituloTres} iconoDos={slideDos.iconoDos} tituloCuatro={slideDos.tituloCuatro}
        imagenDos={slideDos.imagenDos} descripcionDos={slideDos.descripcionDos} descripcionModalDos={slideDos.descripcionModalDos}
        tituloCinco={slideTres.tituloCinco} iconoTres={slideTres.iconoTres} tituloSeis={slideTres.tituloSeis}
        imagenTres={slideTres.imagenTres} descripcionTres={slideTres.descripcionTres} descripcionModalTres={slideTres.descripcionModalTres}/>}></Route>
        <Route path='/sliderdos' element={<SliderDos />}></Route>
      </Routes>
    )
}

export default RoutesApp;