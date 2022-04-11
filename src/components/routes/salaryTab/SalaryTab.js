import './SalaryTab.css';
import React, { useEffect, useState } from 'react';
import PopupCalendar from "../../popups/popupCalendar/PopupCalendar";
import RoomWindow from "./RoomWindow/RoomWindow";
import PopupReservationForm from "../../popups/popupReservationForm/PopupReservationForm";

const SalaryTab = () => {
        const [isPopupCalendar, setIsPopupCalendar]=useState(false);
        const [isPopupReservationForm, setIsPopupReservationForm]=useState(false);
        return (
            <div id='salatryTab'>
                <div id='salatryImg'>
                    <p id="header">CENNIK</p>
                </div>
                <div>
                    <div>Rezerwacja od</div>
                    <div onClick={()=>setIsPopupCalendar(true)}> data1</div>
                    do
                    <div onClick={()=>setIsPopupCalendar(true)}> data2</div>
                    <button onClick={()=>console.log("Wczytaj pokoje na dany termin")}>Wybierz</button>
                    <button onClick={()=>setIsPopupReservationForm(true)}>Rezerwuj</button>
                </div>
                <div>
                        <RoomWindow/>
                        <RoomWindow/>
                </div>
                
                <PopupReservationForm
                    open={isPopupReservationForm}
                    close={()=>setIsPopupReservationForm(false)}
                />
                <PopupCalendar
                open={isPopupCalendar}
                close={()=>setIsPopupCalendar(false)}
            />
            
            </div>
        )
    }

export default SalaryTab;