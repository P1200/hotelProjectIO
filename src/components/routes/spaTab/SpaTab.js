import './SpaTab.css';
import { BsPlayFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import jacuzziImg from "./images/jacuzziImg.png";
import massageAndJauzzi from "./images/massageAndJauzzi.png";
import massageImg from "./images/massageImg.png";
import swimmingPool from "./images/swimmingPool.png";
const SpaTab = () => {

    return (
        <div>
           <div id='spaImg'>
                <p id="header">STREFA RELAKSU</p>
            </div>
            <div id="PriceList">
                <h1>Cennik:</h1>
                <div >
                    <div id="prices">
                        <p>99zł</p>
                        <p>115zł</p>
                        <p>60zł</p>
                        <p>85zł</p>
                        <p>150zł</p>
                        <p>200zł</p>
                        <p>400zł</p>
                    </div>
                    <div id="procedure">
                        <p><BsPlayFill className="arrow"/> Zabieg oczyszczający</p>
                        <p><BsPlayFill className="arrow"/> Zabieg regenerujący</p>
                        <p><BsPlayFill className="arrow"/> Masaż twarzy</p>
                        <p><BsPlayFill className="arrow"/> Masaż twarzy z maską algową</p>
                        <p><BsPlayFill className="arrow"/> Peeling kawitacyjny</p>
                        <p><BsPlayFill className="arrow"/> Peeling kawitacyjny</p>
                        <p><BsPlayFill className="arrow"/> Pakiet zabiegów dla 2 osób</p>
                    </div>
                </div>
            </div>
            <div id="SpaStart">
                Strefa Relaksu
                <div id="aboutSpa">
                    Nasi specjaliści w masażu i zabiegach sprawią, że opuszczając nasz hotel poczujesz się 20 lat młodszy. Wypróbuj nasze najnowsze oferty:
                    <p><BsDot/> zabieg oczyszczający</p>
                    <p><BsDot/> zabieg regenerujący</p>
                </div>
            </div> 
            <div id="objectos">
                <h1>Dostępne obiekty</h1>
                <div className="objecto">
                    <img src={jacuzziImg} width="200" height="100" />
                    <p>Prywatne jacuzzi</p>
                </div>
                <div className="objecto">
                    <img src={swimmingPool} width="200" height="100" />
                    <p>Basen wewnętrzny</p>
                </div>
                <div className="objecto"> 
                    <img src={massageImg} width="200" height="100" />
                    <p>Pokój do masażu</p>
                </div>
                <div className="objecto">
                    <img src={massageAndJauzzi} width="100%" height="100%" />
                    <p>Pokój do masażu dla 2 osób z jacuzzi</p>
                </div>
            </div>
        </div>
    )
}

export default SpaTab;