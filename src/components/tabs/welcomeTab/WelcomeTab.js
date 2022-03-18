import { useTranslation } from 'react-i18next';
import './WelcomeTab.css';

const WelcomeTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div id='WelcomeTab'>
            <div id='hotelImg'>
            <img src="https://k10.targeo.pl/i/cache/vcard/14/05/02/_TGV4499-seoheader.jpg" alt="OurHotel" width="100%" height="100%"/>
            </div>
            <div id='welcomeInformation'>
                <div>
                    Siemaneczko mordeczki!!!
                    <br/>
                    Tu będzie tekst witający naszych gości. Zachęta do rezerwacji pokoju. Coś o okolicy. Taki chwyt, żebyśmy mogi szybko zarobić miliony!
                </div>
            </div>
        </div>
    )
}

export default WelcomeTab;