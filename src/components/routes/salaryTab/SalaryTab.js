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
                <div id='placeholder'></div>
                <button onClick={()=>console.log("Wczytaj pokoje na dany termin")} className='button2'>Wybierz</button>
                <div id='reserv'>
                    <div onClick={()=>setIsPopupCalendar(true)} className='reserv_thng'> data2</div>
                    <div className='reserv_thng'>do</div>
                    <div onClick={()=>setIsPopupCalendar(true)} className='reserv_thng'> data1</div>
                    <div className='reserv_thng'>Rezerwacja od</div>
                    <div id='cls'></div>
                </div>
                <div>
                        <RoomWindow className='pokoj'/>
                        <RoomWindow className='pokoj'/>
                </div>
                <button onClick={()=>setIsPopupReservationForm(true)} className='button2' id='reserv_button'>Rezerwuj</button>
                
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