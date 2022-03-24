import { useTranslation } from 'react-i18next';
import './ContactTab.css';

const ContactTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div id='ContactTab'>
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
        </div>
    )
}

export default ContactTab;