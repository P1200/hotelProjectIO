import { useTranslation } from 'react-i18next';
import './Navigation_bar.css';

const Navigation_bar = ({
    onWelcomeTab,
    onContact,
    onRelax,
    onAttractions,
    onRestaurant,
    onPrice,
    onHotel
}) => {

    const {t, i18n} = useTranslation();

    return (
        <nav id="nav">
            <div id="logo" onClick={onWelcomeTab}>  </div>
            <ul>
                <li><p onClick={onContact}>{t("nav.contact")}</p></li>
                <li><p onClick={onRelax}>{t("nav.relax")}</p></li>
                <li><p onClick={onAttractions}>{t("nav.attractions")}</p></li>
                <li><p onClick={onRestaurant}>{t("nav.restaurant")}</p></li>
                <li><p onClick={onPrice}>{t("nav.price")}</p></li>
                <li><p onClick={onHotel}>{t("nav.hotel")}</p></li>
            </ul>
        </nav>
    )
}
 
export default Navigation_bar;