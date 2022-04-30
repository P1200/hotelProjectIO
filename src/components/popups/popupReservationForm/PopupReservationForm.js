import "./PopupReservationForm.css";
import { useState } from 'react';
import Modal from "../popupBasic/Modal";
import * as yup from 'yup';

function PopupReservationForm({
    open,
    close,
    dateStart,
    dateEnd
  }) {
    const schema = yup.object().shape({
      name: yup.string().required("Pole wymagane").min(2,"Minimum 2 znaki"), 
      surname: yup.string().required("Pole wymagane").min(2, "Minimum 2 znaki"),
      mail: yup.string().email("Nieprawidłowy adres email").required("Pole wymagane"),
      IDN: yup.string().required("Pole wymagane").min(9, "Minimum 9 znaki")
    });
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
        <div> 
          <form  onSubmit={onSubmit}>
            <h2>Twoja Rezerwacja</h2>
            <div>
              <div>Termin: {dateStart}-{dateEnd}</div>
              <div>Liczba pokoi 1 osobowych: 2</div>
              <div>Liczba pokoi 2 osobowych: 0</div>
              <div>Liczba pokoi 4 osobowych: 0</div>
              <div>Liczba pokoi VIP: 0</div>

              <input type="checkbox" id="breakfast" name="breakfast"></input>Śniadnie
            </div>
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
                <input placeholder="Pesel" value={IDN} onChange={e => {
                  setIDN(e.target.value);
                  setErrors({});
                }} />
                {errors.IDN && <p >{errors.IDN}</p>}
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
              <div>
                <input type="radio" id="gotówka" name="payment" value="Gotówka"/>
                <label for="Gotówka">Gotówka</label>
              </div>
            </div>
            Do zapłaty: 200zł
            <div>
              <button onClick={close}>Anuluj </button> 
              <button>Rezerwuj</button>   
            </div>     
          </form>
        </div>
    </Modal>
  );
}

export default PopupReservationForm;
