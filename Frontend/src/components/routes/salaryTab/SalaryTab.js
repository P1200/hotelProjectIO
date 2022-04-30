import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import RoomWindow from "./RoomWindow/RoomWindow";
import PopupReservationForm from "../../popups/popupReservationForm/PopupReservationForm";
import './SalaryTab.css';
import moment from 'moment';

const SalaryTab = () => {
    const [date, setDate] = useState(new Date());
    const [isPopupReservationForm, setIsPopupReservationForm]=useState(false);
    let dateStart,dateEnd;
    return (
        <div id='salatryTab'>
            <div id='salatryImg'>
                <p id="header">CENNIK</p>
            </div>
            <div>
                <div id='reserv'>
                    <div className='reserv_thng'>
                        {date.length > 0 ? (
                            <p>
                                {dateStart=moment(date[0]).format('DD.MM.YYYY ')}
                                do 
                                {dateEnd=moment(date[1]).format(' DD.MM.YYYY')}
                            </p>
                        ) : date.toDateString()
                        }
                    </div>
                    <button onClick={()=>console.log("Load rooms from Api in selected dates")} className='button2'>Wybierz</button>
                </div>
                <div className='reserv_thng'>Rezerwacja od</div>
                <div className='calendar-container'>  
                    <Calendar
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                    />
                </div>
                <div id='cls'></div>
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
        </div>
    )
}

export default SalaryTab;