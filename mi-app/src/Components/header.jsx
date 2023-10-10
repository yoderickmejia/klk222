import React, { useState } from 'react';
import "../styles/nav.css"
import 'animate.css';
import LoginForm from "../Components/SignUp"
import icono from "../Images/icons8-usuario-masculino-en-círculo-48.png"
import { Fade } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/Home.css"
import Navb from "../Components/navbar"

import Carrousel from "../Components/Carrousel";

 function Header(){
  const [divClass, setDivClass] = useState('d-none');

  function handleClick() {
    setDivClass('animate__animated  animate__zoomIn d-absolute  w-50 h-100');
  }

  return (
    <Fade>



    <header >
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-house fa-sm"></i>
            <p className="m-1 ml-2">Bienvenidos a labplus online</p>
          </div>
          <div className="d-flex">
          <img src={icono} onClick={handleClick} className="icono" alt="icono" />
          </div>
        </div>
      </div>
    </div>
    </header>
      <div className="content ">
      <div id='login' className={divClass}>
    <LoginForm />
   </div> 
       
        </div>
  
      
   </Fade>
  )
}

export default Header;
