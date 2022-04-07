import './SalaryTab.css';
import React, { useEffect, useState } from 'react';
import PopupCalendar from "../../popups/popupCalendar/PopupCalendar";
import RoomWindow from "./RoomWindow/RoomWindow"

const SalaryTab = () => {
        const [isPopupCalendar, setIsPopupCalendar]=useState(false);
        return (
            <div id='salatryTab'>
                <div id='salatryImg'>
                    <p id="header">CENNIK</p>
                </div>
                <div>
                    Rezerwacja od
                    <div onClick={()=>setIsPopupCalendar(true)}> data1</div>
                    do
                    <div onClick={()=>setIsPopupCalendar(true)}> data2</div>
                    <button onClick={()=>console.log("Wczytaj pokoje na dany termin")}>Wybierz</button>
                </div>
                <div>
                        <RoomWindow/>
                </div>
                
                
                <PopupCalendar
                open={isPopupCalendar}
                close={()=>setIsPopupCalendar(false)}
            />
            
            </div>
        )
    }

export default SalaryTab;
