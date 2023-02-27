import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const estiloIcon = {
  fontSize: '40px',
  alignText: 'center',
  display: 'inline-flex',
  height: '60%',
  marginBottom: '10px',
  marginTop: '5px'
}

const estiloTitulo = {
  marginLeft: '15px',
  alignSelf: 'center'
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

const estiloAvatar = {
  height: '60%',
  borderRadius: '10px'
}

function SliderDos() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Ha ocurrido un error con el servidor");
      })
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-12" style={estiloIcon}>
                    <img src={data && data[0].avatar} style={estiloAvatar} />
                    <h2 style={estiloTitulo}>{data && data[0].first_name} {data && data[0].last_name}</h2>
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
                  <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/18504/production/_90488599_thinkstockphotos_gato6.jpg" alt="..."
                    data-bs-toggle="modal" data-bs-target="#modal2" />
                </div>
                <div className="row">
                  <div className="col-12" style={estiloIconoClick} >
                    {isActive ? (
                      <FontAwesomeIcon icon={faSquare} onClick={handleClick}></FontAwesomeIcon>) : (
                      <FontAwesomeIcon icon={faCircle} onClick={handleClick}></FontAwesomeIcon>)}
                    <p style={estiloTituloDos}> - {data && data[0].email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12" style={estiloDescripcion}>
                    <p>{data && data[0].first_name} {data && data[0].last_name} {data && data[0].email}</p>
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
                    <img src={data && data[1].avatar} style={estiloAvatar} />
                    <h2 style={estiloTitulo}>{data && data[1].first_name} {data && data[1].last_name}</h2>
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
                  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1653670028.jpg?resize=640:*" alt="..."
                    data-bs-toggle="modal" data-bs-target="#modal2" />
                </div>
                <div className="row">
                  <div className="col-12" style={estiloIconoClick} >
                    {isActive ? (
                      <FontAwesomeIcon icon={faSquare} onClick={handleClick}></FontAwesomeIcon>) : (
                      <FontAwesomeIcon icon={faCircle} onClick={handleClick}></FontAwesomeIcon>)}
                    <p style={estiloTituloDos}> - {data && data[1].email}</p>
                  </div>

                </div>
                <div className="row">
                  <div className="col-12" style={estiloDescripcion}>
                    <p>{data && data[1].first_name} {data && data[1].last_name} {data && data[1].email}</p>
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
                    <img src={data && data[2].avatar} style={estiloAvatar} />
                    <h2 style={estiloTitulo}>{data && data[2].first_name} {data && data[2].last_name}</h2>
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
                  <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/E8C4/production/_90488595_thinkstockphotos_gato5.jpg" alt="..."
                    data-bs-toggle="modal" data-bs-target="#modal3" />
                </div>
                <div className="row">
                  <div className="col-12" style={estiloIconoClick} >
                    {isActive ? (
                      <FontAwesomeIcon icon={faSquare} onClick={handleClick}></FontAwesomeIcon>) : (
                      <FontAwesomeIcon icon={faCircle} onClick={handleClick}></FontAwesomeIcon>)}
                    <p style={estiloTituloDos}> - {data && data[2].email}</p>
                  </div>

                </div>
                <div className="row">
                  <div className="col-12" style={estiloDescripcion}>
                    <p>{data && data[2].first_name} {data && data[2].last_name} {data && data[2].email}</p>
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
                {data && data[0].first_name} {data && data[0].last_name}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
                {data && data[1].first_name} {data && data[1].last_name}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
                {data && data[2].first_name} {data && data[2].last_name}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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
export default SliderDos;