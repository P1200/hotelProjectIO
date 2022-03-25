import { useTranslation } from 'react-i18next';
import './ContactTab.css';

const ContactTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div id='contactTab'>
            <div id='contactImg'>
                <p>{t("nav.contact")}</p>
            </div>
            <div id='contactData'>
                <div id="information">
                   <h1>{t("contact.formHeader")}</h1>
                   <div className='contactInformation'>
                        <h3>Fun<span>&amp;</span>Relax Hotel</h3>
                        <p>ul. Jesienna 23</p>
                        <p>00-002, Kryspianowo PL</p>
                    </div>
                    <div className='contactInformation'>  
                        <h3>{t("contact.phoneNumber")}</h3>
                        <p>{("contact.reception")}</p>
                        <p>+48 652 346 981</p>
                        <p>{t("nav.restaurant")}</p>
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
                    <form id="contactForm" action="process_form.php" method="post">
                        <fieldset>
                            <h2>{t("contact.writeToUs")}</h2>
                            <label for="email"></label>
                            <input type="text" id="email" name="email" placeholder="Email*"></input>
                            <label for="nameAndSurname"></label>
                            <input type="text" id="nameAndSurname" name="nameAndSurname" placeholder={t("contact.form.nameAndSurname")}></input>
                            <label for="phoneNumber"></label>
                            <input type="text" id="phoneNumber" name="phoneNumber" placeholder={t("contact.phoneNumber")}></input>
                            <label for="message"></label>
                            <textarea id="message" name="message" placeholder="Twoja wiadomość*" rows="10" cols="100"></textarea>
                            <p>{t("contact.personalData")}</p>
                            <p>{t("contact.requiredField")}</p>
                            <input type="submit" value={t("contact.sendButton")}></input>
                        </fieldset>
                    </form>
                </div>
                <div id="map">
                 
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6932.582436927996!2d15.726014361581637!3d52.097239516268615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1648241788378!5m2!1spl!2spl" width="530" height="440" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
            </div>
        </div>
    )
}

export default ContactTab;