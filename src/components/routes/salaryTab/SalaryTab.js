import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import RoomWindow from "./RoomWindow/RoomWindow";
import PopupReservationForm from "../../popups/popupReservationForm/PopupReservationForm";
import './SalaryTab.css';
import moment from 'moment';
import {getAvaliabeRooms} from "./../../../apiOperations/apiGet";

const SalaryTab = () => {
    const [date, setDate] = useState(new Date());
    const [isPopupReservationForm, setIsPopupReservationForm]=useState(false);
    const [avaliabeRooms, setAvaliabeRooms]=useState([]);
    const [roomsToBook, setRoomsToBook]=useState([]);
    const [howManyRooms, setHowManyRooms]=useState([]);
    const [bookedVisitArray, setBookedVisitArray]=useState([]);


    const [mail, setMail] = useState('');

    let dateStart,dateEnd;
    return (
        <div id='salatryTab'>
            <div id='salatryImg'>
                <p id="header">CENNIK</p>
            </div>
            <div>
                <div id='reserv'>
                    <div className='reserv_thng'>
                        <button 
                            onClick={async ()=>{
                                setRoomsToBook([]);
                                let date1=moment(date[0]).format('YYYY-MM-DD');
                                let date2=moment(date[1]).format('YYYY-MM-DD');
                                let tmp= await getAvaliabeRooms(date1,date2);
                                let i=0;
                                let array=[];
                                let array2=[];
                                tmp.map((room)=>{
                                   let tmpRoom={
                                        id: i,
                                        kind: room.kind,
                                        path:room.path,
                                        prise: room.prise,
                                        roomCount: room.room_count 
                                    }
                                   i++;
                                   array.push(tmpRoom);

                                   let tmpRoomsToBook={id: i, kind: room.kind, value:0, prise: room.prise};
                                   array2.push(tmpRoomsToBook)
                                })
                                setAvaliabeRooms(array);
                                setBookedVisitArray(array2)
                                setHowManyRooms(tmp.length); //?                                
                        }} 
                        className='button2'>
                            Wybierz
                        </button>
                        {date.length > 0 ? (
                            <p id="WhichDate">
                                Rezerwacja od  
                                {dateStart=moment(date[0]).format('DD.MM.YYYY ')}
                                do 
                                {dateEnd=moment(date[1]).format(' DD.MM.YYYY')}
                                
                            </p>
                        ) : <p id="WhichDate"> Wybierz termin</p>
                        }
                        
                    </div>
                    
                </div>
                
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
            
                 {avaliabeRooms.length==0?<div>Brak wolnych pokoi</div>:
                 
                 avaliabeRooms.map((room)=>{
                    return(
                        <RoomWindow 
                        className='pokoj'
                        key={room.kind}
                        image={room.path}
                        price={room.prise}
                        roomName={room.kind}
                        howMannyAvaliabeRooms={room.roomCount}
                        tmpHowManyReserved={
                            <input type="number" min={0} max={room.roomCount} id={"input"+room.kind} placeholder={0}  onChange={e => {
                                bookedVisitArray[room.id].value=e.target.value
                                
                                setMail(e.target.value)
                               // setErrors({});
                            }} />
                        }
                    />)
                 })}
                
            </div>
            <button onClick={()=>setIsPopupReservationForm(true)} className='button2' id='reserv_button'>Rezerwuj</button>
    
            <PopupReservationForm
                open={isPopupReservationForm}
                close={()=>setIsPopupReservationForm(false)}
                dateStart={dateStart}
                dateEnd={dateEnd}
                bookedVisitArray={bookedVisitArray}
            /> 
        </div>
    )
}

export default SalaryTab; 