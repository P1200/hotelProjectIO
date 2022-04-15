
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from "../popupBasic/Modal"
import './PopupCalendar.css';


function PopupCalendar({
  open,
  close
}) {
  const [date, setDate] = useState(new Date());

  return (
      <Modal
      open={open}
      
     >
    <div className='app'>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '} 
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
    <button onClick={close}>Zatwierdź</button>
    </Modal>
  );
}

export default PopupCalendar;
