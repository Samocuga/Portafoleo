import Header from '../../components/header/Header';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';
import "./Home.css"
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
    <Header/>
    <Info/>
    <br/>
    <div>
    <a href><Link to="/portafolio">Ver Portafoleo Completo</Link></a>
    <a href><Link to="/educacion">Ver Educacion</Link></a>
    <a href><Link to="/Aptitudes">Ver Aptitudes</Link></a>
    <a href><Link to="/Habilidades">Habilidades</Link></a>
    </div>
    <br/>
    <Footer/>
    </div>
  );
}

export default Home;