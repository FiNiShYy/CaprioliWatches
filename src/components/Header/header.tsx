/* eslint-disable react/prop-types */
import * as C from "./style";
import LogoCaprioli from "../../assets/Logo.svg";
;
const Header = () => {

  return (
    <>
      <C.Container>
        <header>
            <div className="header-logo">
                <img src={LogoCaprioli} alt="Logo" />
                <h1>Caprioli Watches</h1>
            </div>
            <div className="header-menu">
                <ul>
                    <li>TAGHEUER</li>
                    <li>VICTORINOX</li>
                    <li>DIESEL</li>
                    <li>INVICTA</li>
                    <li>CASIO</li>
                    <li>MICHAEL KORS</li>
                    <li>CITIZEN</li>
                    <li>TISSOT</li>
                    <li>BULOVA</li>
                </ul>
            </div>
        </header>
      </C.Container>
    </>
  );
};

export default Header;
