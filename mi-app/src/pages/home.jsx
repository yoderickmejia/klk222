
import { Fade } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/Home.css"
import Navb from "../Components/navbar"
import Info from "../Components/Info"
import Carrousel from "../Components/Carrousel";
import Header from "../Components/header"
const Home = () => {
  return (  
    <Fade>
      <div className="content ">
        <div className="Header">
          <Header/>    
        </div>
        <div className="Navb">
          <Navb/>
        </div> 
        <div className="Carrousel">
          <Carrousel/>  
        </div>
           <div>
            <Info/>
           </div>
        </div>
  </Fade>
  );
};

export default Home;