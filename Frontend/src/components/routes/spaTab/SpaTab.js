import './SpaTab.css';
import { BsPlayFill } from "react-icons/bs";

const SpaTab = () => {

    return (
        <div >
           <div id='spaImg'>
                <p id="header">STREFA RELAKSU</p>
            </div>
            <div>
                Strefa Relaksu
                <div>
                    Zachwalanie strefy relaksu
                </div>
            </div>
            <div>
                Cennik
                <div>
                    <div>
                        <p><BsPlayFill/> Zabieg oczyszczający</p>
                        <p><BsPlayFill/> Zabieg regenerujący</p>
                        <p><BsPlayFill/> Masaż twarzy</p>
                        <p><BsPlayFill/> Masaż twarzy z maską algową</p>
                        <p><BsPlayFill/> Peeling kawitacyjny</p>
                        <p><BsPlayFill/> Peeling kawitacyjny</p>
                        <p><BsPlayFill/> Pakiet zabiegów dla 2 osób</p>
                    </div>
                    <div>
                        <p>99zł</p>
                        <p>115zł</p>
                        <p>60zł</p>
                        <p>85zł</p>
                        <p>150zł</p>
                        <p>200zł</p>
                        <p>400zł</p>

                    </div>
                </div>
            </div>
            <div>
                Dostępne obiekty
                <div>
                    <div id="pesiota"></div>
                    <p>Prywatne jacuzzi</p>
                </div>
                <div>
                    <div id="pesiota"></div>
                    <p>Basen wewnętrzny</p>
                </div>
                <div>
                    <div id="pesiota"></div>
                    <p>Pokój do masażu</p>
                </div>
                <div>
                    <div id="pesiota"></div>
                    <p>Pokój do masażu dla 2 osób z jacuzzi</p>
                </div>
            </div>
        </div>
    )
}

export default SpaTab;