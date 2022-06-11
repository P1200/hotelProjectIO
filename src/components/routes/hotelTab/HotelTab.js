import './HotelTab.css';
import HotelHistoryPopup from "../../popups/hotelHistoryPopup/HotelHistoryPopup";
import React, {useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { getRooms} from "./../../../apiOperations/apiGet";
import PopupRoomInformation from "./../../popups/popupRoomInformation/PopupRoomInformation";
import PopupGallery from "./../../popups/popupGallery/PopupGallery";

const HotelTab = () => {
    const [isHotelHistoryPopup,setIsHotelHistoryPopup]=useState(false);
    const [rooms,setRooms]=useState([]);
    const [isPopupRoomInformation, setIsPopupRoomInformation]=useState(false);
    const [roomInformation, setRoomInformation]=useState({});
    return (


        
        <div id='hotelTab' onLoad={async()=>{
            setRooms(await  getRooms())
        }}>
            <div id='hotelImg'>
                <p id="header">HOTEL</p>
            </div>
            <div > 
                <div onClick={()=> setIsHotelHistoryPopup(true)} id="aboutHotel">
                    
                    <h2>Historia</h2>
                    <p id="aboutHotelContent">
                    Hotel Fun&Relax założony w roku 2022 przez 4 studentów informatyki pierwszego stopnia z tytułem inżyniera z Zielonej Góry,
                    którzy nie mieli pomysłu na projekt na zaliczenie przedmiotu, jakim jest Inżynieria 
                    Oprogramowania prowadzona przez Pana doktora inżyniera Tomasza Gratkowskiego. Hotel kieruje
                    się znanym przez wszystkich studentów mottem „byle na 3”, co można zobaczyć w zarządzaniu naszą placówką.
                    </p>
                </div>
                <div id="gallery">
                    <h2>Galeria</h2> 
                    <br/>
                    <div id='gal1'>
                        <img src={require("./imag/1os.png")} alt="obrazek" className='obr'/>\
                        
                    </div>
                    <div id='gal2'>
                        <img src={require("./imag/2os.png")} alt="obrazek" className='obr'/>
                    </div>
                    <p>Zobacz więcej <AiOutlineRight/></p>
                </div>
                <div id="cls"></div>
                <div id="rooms">
                    <h2>Pokoje</h2>
                        <br/>
                        {rooms.map((room)=>{
                            return(
                                <div onClick={()=>{
                                    setIsPopupRoomInformation(true);
                                    setRoomInformation(room)
                                }}>
                                <img src={require(`./imag/${room.path}`)} alt="obrazek" className='obr'/>
                                {room.kind} <AiOutlineRight/>
                                </div>
                            )
                        })}  
                </div>
            </div>
            <HotelHistoryPopup
                open={isHotelHistoryPopup}
                close={()=> setIsHotelHistoryPopup(false)}
            />
           <PopupRoomInformation
           open={isPopupRoomInformation}
           close={()=> setIsPopupRoomInformation(false)}
           room={roomInformation}
           />
        </div>
    )
}

export default HotelTab;