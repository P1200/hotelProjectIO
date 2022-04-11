import "./PopupReservationForm.css"
import { useState } from 'react';
import Modal from "../popupBasic/Modal";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from 'yup';

function PopupReservationForm({
    open,
    close
  }) {
    const schema = yup.object().shape({
      name: yup.string().required("Pole wymagane").min(2,"Minimum 2 znaki"), // add min len
      surname: yup.string().required("Pole wymagane").min(2, "Minimum 2 znaki"), // add min len
      mail: yup.string().email("Nieprawidłowy adres email").required("Pole wymagane"),
    });
      const [name, setName] = useState('');
      const [mail, setMail] = useState('');
      const [surname, setSurname] = useState('');
      const [errors, setErrors] = useState({});
      const onSubmit = async e => {
          e.preventDefault();
      
          const data = { name, mail, surname};
          try {
            await schema.validate(data, {abortEarly: false});
            alert(JSON.stringify(data));
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
         <div > 
            <form  onSubmit={onSubmit}>
              <h2>Twoja Rezerwacja</h2>
                <div>Termin: xx.xx.xxxx-xx.xx.xxxx</div>
                <div>Dostawka: tak</div>
                <div>Śniadanie: nie</div>
               <div>
                  <h3>Dane osobowe</h3>
                  <div>
                  <input placeholder="Imię" value={name} onChange={e => {
                      setName(e.target.value);
                      setErrors({});
                    }} />
                    {errors.name && <p >{errors.name}</p>}
                    </div>
                    <div>
                    <input placeholder="Nazwisko" value={surname} onChange={e => {
                      setSurname(e.target.value);
                      setErrors({});
                    }} />
                    {errors.surname && <p >{errors.surname}</p>}
                    </div>
                    <div>
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

                    <div>  {/*add yup*/}
                      <input type="radio" id="gotówka" name="payment" value="Gotówka"/>
                      <label for="Gotówka">Gotówka</label>
                    </div>
                </div>

                <button onClick={close}>Anuluj </button> 
                <button>Rezerwuj</button>        
            </form>
            </div>
      </Modal>
    );
  }
  
  export default PopupReservationForm;
  