import './SalaryTab.css';
import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react';
import PopupCalendar from "../../popups/popupCalendar/PopupCalendar"; //zostawic
import RoomWindow from "./RoomWindow/RoomWindow";
import PopupReservationForm from "../../popups/popupReservationForm/PopupReservationForm";

const SalaryTab = () => {
        const [isPopupCalendar, setIsPopupCalendar]=useState(false);
        const [date, setDate] = useState(new Date());
        const [isPopupReservationForm, setIsPopupReservationForm]=useState(false);
        let dateStart,dateEnd;
        return (
            <div id='salatryTab'>
                <div id='salatryImg'>
                    <p id="header">CENNIK</p>
                </div>
                <button onClick={()=>console.log("Wczytaj pokoje na dany termin")} className='button2'>Wybierz</button>
                <div id='reserv'>
                    <div className='reserv_thng'>
                        {date.length > 0 ? (
                            <p>
                            {date[0].toDateString()}
                            {dateStart=date[0].toDateString()}
                            do
                            {date[1].toDateString()}
                            {dateEnd=date[0].toDateString()}

                            </p>
                        ) : date.toDateString()
                        }
                    </div>
                    <div className='reserv_thng'>Rezerwacja od</div>
                    <div id='cls'></div>
                </div>
                <div className='calendar-container'>  
                    <Calendar
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                    />
                </div>
                <div>
                        <RoomWindow 
                            className='pokoj'
                            price={200}
                        />
                        <RoomWindow 
                            className='pokoj'
                            price={200}
                        />
                </div>
                <button onClick={()=>setIsPopupReservationForm(true)} className='button2' id='reserv_button'>Rezerwuj</button>
                
                <PopupReservationForm
                    open={isPopupReservationForm}
                    close={()=>setIsPopupReservationForm(false)}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    
                />
                <div className='app'>
      
      
    </div>
            
            </div>
        )
    }

export default SalaryTab;