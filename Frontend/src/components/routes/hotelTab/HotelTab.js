import './HotelTab.css';
import HotelHistoryPopup from "../../popups/hotelHistoryPopup/HotelHistoryPopup";
import React, {useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";

const HotelTab = () => {
    const [isHotelHistoryPopup,setIsHotelHistoryPopup]=useState(false);
    return (
        <div id='hotelTab'>
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNkYs6O8BvDgTJEEtcm8LtKvRZpU49kiMzA&usqp=CAU" alt="obrazek" className='obr'/>
                        </div>
                        <div id='gal2'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNkYs6O8BvDgTJEEtcm8LtKvRZpU49kiMzA&usqp=CAU" alt="obrazek" className='obr'/>
                        </div>
                        <p>Zobacz więcej <AiOutlineRight/></p>
                    </div>
                    <div id="cls"></div>
                    <div id="rooms">
                    <h2>Pokoje</h2>
                        <br/>
                        <div className='room'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNkYs6O8BvDgTJEEtcm8LtKvRZpU49kiMzA&usqp=CAU" alt="pok 1" className='obr'/>
                            <p>jakis pokoj <AiOutlineRight/></p>
                        </div>
                        <div className='room'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNkYs6O8BvDgTJEEtcm8LtKvRZpU49kiMzA&usqp=CAU" alt="pok 2" className='obr'/>
                            <p>jakis pokoj <AiOutlineRight/></p>
                        </div>
                        <div className='room'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNkYs6O8BvDgTJEEtcm8LtKvRZpU49kiMzA&usqp=CAU" alt="pok 3" className='obr'/>
                            <p>jakis pokoj <AiOutlineRight/></p>
                        </div>
                        <div className='room'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNkYs6O8BvDgTJEEtcm8LtKvRZpU49kiMzA&usqp=CAU" alt="pok 4" className='obr'/>
                            <p>jakis pokoj <AiOutlineRight/></p>
                        </div>
                    </div>
                    
                </div>
                <HotelHistoryPopup
                    open={isHotelHistoryPopup}
                    close={()=> setIsHotelHistoryPopup(false)}
                />
        </div>
    )
}

export default HotelTab;