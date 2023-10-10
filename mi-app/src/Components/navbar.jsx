import React from 'react'
import "../styles/header.css"
import Logo from "../Images/logo.png"
 const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  d-flex navbar-light  justify-content-between  ">
    <img className="img-fluid w-40  m-3" src={Logo} alt="Logo" />
    <a  className=" boton icono w-20 btn-3d btn-square btn-danger   m-5 text-xl waves-effect waves-light " href="#dos" data-ancla="dos">Labplus® Online</a>
  </nav>
  )
}

export default navbar
