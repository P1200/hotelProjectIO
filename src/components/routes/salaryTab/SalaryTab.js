import './SalaryTab.css';
import React, { useEffect, useState } from 'react';
import PopupCalendar from "../../popups/popupCalendar/PopupCalendar";
const SalaryTab = () => {
        const [isPopupCalendar, setIsPopupCalendar]=useState(false);
    return (
        <div >
            SalaryTab <br/>
            SalaryTab <br/>
            SalaryTab <br/>
            <button onClick={()=>setIsPopupCalendar(true)}>KLIKNIJ PIZDO</button>
            <PopupCalendar
                open={isPopupCalendar}
                close={()=>setIsPopupCalendar(false)}
            />
        </div>
    )
}

export default SalaryTab;