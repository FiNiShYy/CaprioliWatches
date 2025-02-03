import * as C from "../styles/home";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

import bannerInicial from "../assets/bannerInicial.png";
import Lock from "../assets/Lock.svg";
import chatMessage from "../assets/Chat Message.svg";
import magneticCard from "../assets/Magnetic Card.svg";
import Truck from "../assets/Truck.svg";
import Bulova from "../assets/BulovaPC.png";
import Citizen from "../assets/CitizenPC.png";
import Seiko from "../assets/SeikoPC.png";
import Victorinox from "../assets/VictoriNoxPC.png";



function HomeApp() {

  return (
    <C.Container>
        <Header />
          <div className="banner">
            <img src={bannerInicial} alt=""/>
          </div>

          <div className="info-banner">
            <div className="info-banner-content">
              <img src={magneticCard} alt=""/>
                <p>Parcelamos em<br/>até 10x</p>
            </div>
            <div className="info-banner-content">
              <img src={Truck} alt=""/>
              <p>Enviamos para <br/>todo o Brasil</p>
            </div>
            <div className="info-banner-content">
              <img src={chatMessage} alt=""/>
              <p>Atendimento via <br/>WhatsApp</p>
            </div>
            <div className="info-banner-content">
              <img src={Lock} alt=""/>
              <p>Compra 100% <br/>segura</p>
            </div>
          </div>

          <div className="section-favorito">
            <p>JÁ TEM UM FAVORITO?</p>
            <div className="favorito-images">
              <img src={Bulova} alt=""/>
              <img src={Citizen} alt=""/>
              <img src={Seiko} alt=""/>
              <img src={Victorinox} alt=""/>
            </div>
          </div>
        <Footer/>
    </C.Container>
  );
}

export default HomeApp;
