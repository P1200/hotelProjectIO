import { useTranslation } from 'react-i18next';
import './ContactTab.css';

const ContactTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div id='contactTab'>
            <div id='contactImg'>
                <p>Kontakt</p>
            </div>
            <div id='contactData'>
                <div>
                   <h4>Nawiąż z nami kontakt!</h4>
                   <ul>
                        <li>
                            <p>Fun<span>&amp;</span>Relax Hotel</p>
                            <p>ul. Jesienna 23</p>
                            <p>00-002, Kryspianowo PL</p>
                        </li>
                        <li>
                            <p>Telefon</p>
                            <p>Recepcja</p>
                            <p>+48 652 346 981</p>
                            <p>Restauracja</p>
                            <p>+48 652 567 982</p>
                        </li>
                        <li>
                            <p>Email<span>&amp;</span>Fax</p>
                            <p>fandr@gmail.com</p>
                            <p>fax. +48 652 763 762</p>
                        </li>
                   </ul>
                </div>
            </div>
            <form id="contactForm" action="process_form.php" method="post">
                <fieldset>
                    <h4>Napisz do nas</h4>
                    <section>
                        <label for="email"></label>
                        <input type="text" id="email" name="email" placeholder="Email*"></input>
                        <label for="nameAndSurname"></label>
                        <input type="text" id="nameAndSurname" name="nameAndSurname" placeholder="Imię i nazwisko*"></input>
                        <label for="phoneNumber"></label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Numer telefonu"></input>
                        <label for="message"></label>
                        <input type="text" id="message" name="message" placeholder="Twoja wiadomość*"></input>
                        <p>Administratorem danych osobowych jest Fun<span>&amp;</span>Relax Hotel 00-002, ULICA JESIENNA 23, podane przez Ciebie dane będziemy przetwarzać w celu udzielenia odpowiedzi na przesłane zapytanie (art. 6 ust. 1 lit. f RODO). </p>
                        <p>*pola wymagane</p>
                    </section>
                    <section>
                        <input type="submit" value="Wyślij"></input>
                    </section>
                </fieldset>
            </form>
            <div id="map">

            </div>
        </div>
    )
}

export default ContactTab;