import React, { useState } from 'react';
import './ContactTab.css';
import * as yup from 'yup';

export default function ContactTab ()
 {

    const schema = yup.object().shape({
        name: yup.string().required("Pole wymagane"),
        phone: yup.string(),
        mail: yup.string().email("Nieprawidłowy adres email").required("Pole wymagane"),
        msg: yup.string().required("Pole wymagane"),
    });
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [errors, setErrors] = useState({});
    const onSubmit = async e => {
        e.preventDefault();
        const data = { name, phone, mail, msg };
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
        <div id='contactTab'>
            <div id='contactImg'>
                <p id="header">KONTAKT</p>
            </div>
            <div id="information">
                <h1>Nawiąż z nami kontakt</h1>
                <div>
                    <div className='contactInformation'>
                        <h3>Fun<span>&amp;</span>Relax Hotel</h3>
                        <p>ul. Jesienna 23</p>
                        <p>00-002, Kryspianowo PL</p>
                    </div>
                    <div className='contactInformation'>  
                        <h3>Telefon</h3>
                        <p>Recepcja</p>
                        <p>+48 652 346 981</p>
                        <p>Restauracja</p>
                        <p>+48 652 567 982</p>
                    </div>
                    <div className='contactInformation'>
                        <h3>Email<span>&amp;</span>Fax</h3>
                        <p>fandr@gmail.com</p>
                        <p>fax. +48 652 763 762</p>
                    </div>
                </div>  
            </div>
            <div id="cls"></div>
            <div id="mailAndMap">
                <div > 
                    <form id="contactForm" onSubmit={onSubmit}>
                        <div id="napis">
                            <h2>Napisz do nas</h2>
                        </div>
                        <div id="email_block">
                            <input id="email" placeholder="Email*" value={mail} onChange={e => {
                                setMail(e.target.value);
                                setErrors({});
                            }} />
                            {errors.mail && <p id="er_email">{errors.mail}</p>}
                        </div>
                        <div id="name_block">
                            <input id="name" placeholder="Imię i nazwisko" value={name} onChange={e => {
                                setName(e.target.value);
                                setErrors({});
                            }} />
                            {errors.name && <p id="er_name">{errors.msg}</p>}
                        </div>
                        <div id="phone_block">
                            <input id="phone" placeholder="Numer telefonu" value={phone} onChange={e => {
                                setPhone(e.target.value);
                                setErrors({});
                            }} />
                            {errors.phone && <p id="er_phone">{errors.phone}</p>}
                        </div>
                        <div id="msg_block">
                            <input id="msg" placeholder="Twoja wiadomość" value={msg} onChange={e => {
                                setMsg(e.target.value);
                                setErrors({});
                            }} />
                            {errors.msg && <p id="er_msg">{errors.name}</p>}
                        </div>
                        <div id="note">
                            Administratorem danych osobowych jest Fun&Relax Hotel 00-002, ULICA JESIENNA 23, podane przez Ciebie dane będziemy przetwarzać w celu udzielenia odpowiedzi na przesłane zapytanie (art. 6 ust. 1 lit. f RODO).
                        </div>
                        <button className="button" >Wyślij</button>       
                    </form>
                </div>
                <div id="map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6932.582436927996!2d15.726014361581637!3d52.097239516268615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1648241788378!5m2!1spl!2spl" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

