import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const estiloIcon = {
    fontSize: '40px',
    alignText: 'center',
    display: 'inline-flex',
    marginTop: '5px'
}

const estiloTitulo = {
    marginLeft: '15px'
}

const estiloIconoClick = {
    fontSize: '25px',
    marginTop: '10px',
    display: 'inline-flex',
    alignItems: 'baseline'
}
const estiloTituloDos = {
    marginLeft: '15px'
}

const estiloDescripcion = {
    fontSize: '18px',
    textAlign: 'initial',
    marginTop: '10px',
}

const estiloBoton = {
    height: '81.7%',
    marginTop: '47px'
}

const SliderUno = (props) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-12" style={estiloIcon}>
                                        <FontAwesomeIcon icon={props.icono}></FontAwesomeIcon>
                                        <h2 style={estiloTitulo}>{props.tituloUno}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="prev"
                                        style={estiloBoton}
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="next"
                                        style={estiloBoton}
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    <img src={props.imagen} alt="..." 
                                    data-bs-toggle="modal" data-bs-target="#modal1"/>
                                </div>
                                <div className="row">
                                    <div className="col-12" style={estiloIconoClick} >
                                        {isActive ? (
                                            <FontAwesomeIcon icon={faSquare} onClick={handleClick}></FontAwesomeIcon>) : (
                                            <FontAwesomeIcon icon={faCircle} onClick={handleClick}></FontAwesomeIcon>)}
                                        <p style={estiloTituloDos}> - {props.tituloDos}</p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12" style={estiloDescripcion}>
                                        <p>{props.descripcion}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <Link to="/" type="button" className="btn btn-primary">Volver</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-12" style={estiloIcon}>
                                        <FontAwesomeIcon icon={props.iconoDos}></FontAwesomeIcon>
                                        <h2 style={estiloTitulo}>{props.tituloTres}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="prev"
                                        style={estiloBoton}
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="next"
                                        style={estiloBoton}
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    <img src={props.imagenDos} alt="..." 
                                    data-bs-toggle="modal" data-bs-target="#modal2"/>
                                </div>
                                <div className="row">
                                    <div className="col-12" style={estiloIconoClick} >
                                        {isActive ? (
                                            <FontAwesomeIcon icon={faSquare} onClick={handleClick}></FontAwesomeIcon>) : (
                                            <FontAwesomeIcon icon={faCircle} onClick={handleClick}></FontAwesomeIcon>)}
                                        <p style={estiloTituloDos}> - {props.tituloCuatro}</p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12" style={estiloDescripcion}>
                                        <p>{props.descripcionDos}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <Link to="/" type="button" className="btn btn-primary">Volver</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-12" style={estiloIcon}>
                                        <FontAwesomeIcon icon={props.iconoTres}></FontAwesomeIcon>
                                        <h2 style={estiloTitulo}>{props.tituloCinco}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="prev"
                                        style={estiloBoton}
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="next"
                                        style={estiloBoton}
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    <img src={props.imagenTres} alt="..." 
                                    data-bs-toggle="modal" data-bs-target="#modal3"/>
                                </div>
                                <div className="row">
                                    <div className="col-12" style={estiloIconoClick} >
                                        {isActive ? (
                                            <FontAwesomeIcon icon={faSquare} onClick={handleClick}></FontAwesomeIcon>) : (
                                            <FontAwesomeIcon icon={faCircle} onClick={handleClick}></FontAwesomeIcon>)}
                                        <p style={estiloTituloDos}> - {props.tituloSeis}</p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12" style={estiloDescripcion}>
                                        <p>{props.descripcionTres}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                    <Link to="/" type="button" className="btn btn-primary">Volver</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {props.tituloUno}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">{props.descripcionModal}</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                            {props.tituloTres}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">{props.descripcionDos}</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                            {props.tituloCinco}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">{props.descripcionTres}</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SliderUno;