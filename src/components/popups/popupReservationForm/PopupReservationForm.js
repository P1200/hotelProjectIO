import "./PopupReservationForm.css";
import { useState } from 'react';
import Modal from "../popupBasic/Modal";
import * as yup from 'yup';
import {doesClientExistInDB} from "./../../../apiOperations/apiGet";
import {postClient, postVisit} from "./../../../apiOperations/apiPost";

function PopupReservationForm({
    open,
    close,
    dateStart,
    dateEnd,
    bookedVisitArray,
    howLong
  }) {
    const schema = yup.object().shape({
      name: yup.string().required("Pole wymagane").min(2,"Minimum 2 znaki"), 
      surname: yup.string().required("Pole wymagane").min(2, "Minimum 2 znaki"),
      mail: yup.string().email("Nieprawidłowy adres email").required("Pole wymagane"),
      IDN: yup.string().required("Pole wymagane").min(9, "Minimum 9 znaki")
    });
    let sum=0;
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [surname, setSurname] = useState('');
    const [IDN, setIDN] = useState('');
    const [errors, setErrors] = useState({});
    const onSubmit = async e => {
        e.preventDefault();
        const data = { name, mail, surname, IDN};
        try {
          await schema.validate(data, {abortEarly: false});
         
          let tmpIDN= await doesClientExistInDB(IDN);
          console.log("tmpIDN")

         if(tmpIDN==0)
         {
           let client={
            idn: IDN,
            name: name,
            surname: surname,
            email: mail,
            phone_number: "x"
           }
           console.log(client)
           await postClient(client)
          console.log("newClientAdded")
        }
        
        bookedVisitArray.map( async (visit)=>
        {
          let tmpVisit={};
          if(parseInt(visit.value)!=0)
          {
            tmpVisit={
            arrival_date:dateStart,
            departure_date:dateEnd,
            kind:visit.kind,
            room_count:visit.room_count,
            paid: true,
            pesel:IDN
          }
          console.log("visitToBook")
          console.log(tmpVisit)
          await postVisit(tmpVisit);
          }
          })
         
        }
        catch (e) {
          const errors = e.inner.map(el => ({
            fieldName: el.path,
            message: el.message,
          })).reduce((acc, current) => ({
            ...acc,
            [current.fieldName]: current.message,
          }), {});
          setErrors(errors);
        }
      }
  return (
      <Modal
        open={open}   
        close={close} 
      >
        <div> 
          <form  onSubmit={onSubmit}>
            <h2 id='head'>Twoja Rezerwacja</h2>
            <div id='datebreakfast'>
              <div>Termin: {dateStart}-{dateEnd}</div>
              
                { bookedVisitArray.map((room)=>{
                  sum+=room.value*room.prise;
                  return(
                  <div key={room.kind}>
                    {room.kind}: {room.value}
                  </div>
                  )})}
              

              <input type="checkbox" id="breakfast" name="breakfast"></input>Śniadnie
            </div>
            <div id='tofill'>
              <h3>Dane osobowe</h3>
              <div  className='filling'>
                <input placeholder="Imię" value={name} onChange={e => {
                  setName(e.target.value);
                  setErrors({});
                }} />
                {errors.name && <p >{errors.name}</p>}
              </div>
              <div  className='filling'>
                <input placeholder="Nazwisko" value={surname} onChange={e => {
                setSurname(e.target.value);
                setErrors({});
              }} />
              {errors.surname && <p >{errors.surname}</p>}
              </div>
              <div  className='filling'>
                <input placeholder="Pesel" value={IDN} onChange={e => {
                  setIDN(e.target.value);
                  setErrors({});
                }} />
                {errors.IDN && <p >{errors.IDN}</p>}
              </div>
              <div  className='filling'>
                <input placeholder="Email" value={mail} onChange={e => {
                setMail(e.target.value);
                setErrors({});
                }} />
                {errors.mail && <p >{errors.mail}</p>}
              </div>
              <div>
                <input type="radio" id="karta" name="payment" value="Karta" checked/>
                <label for="Karta">Karta</label>
              </div>
              <div>
                <input type="radio" id="gotówka" name="payment" value="Gotówka"/>
                <label for="Gotówka">Gotówka</label>
              </div>
            </div>
            <div id='topay'>Do zapłaty: {sum=sum*howLong}</div>
            
            <div>
              <button id='cancel' onClick={close}>Anuluj </button> 
              <button id='book'onClick={ ()=>{
                //rezerwuj
              }

              }>
                  Rezerwuj
              </button>   
            </div>     
          </form>
        </div>
    </Modal>
  );
}

export default PopupReservationForm;
