import { useTranslation } from 'react-i18next';
import './Navigation_bar.css';

const Navigation_bar = () => {

    const {t, i18n} = useTranslation();

    return (
<<<<<<< HEAD
        <nav id="nav">
            <div id="logo">
                
=======
        <nav>
            <div id="logo">
                <img src="src\components\navigation_bar\logo.png" alt="OurLogo" width="5%" height="5%"/>
>>>>>>> 73b98812dbe7bf6f2f23e8dae30411e336c6d593
            </div>
            <ul>
                <li><p>{t("nav.hotel")}</p></li>
                <li><p>{t("nav.price")}</p></li>
                <li><p>{t("nav.restaurant")}</p></li>
                <li><p>{t("nav.relax")}</p></li>
                <li><p>{t("nav.attractions")}</p></li>
                <li><p>{t("nav.contact")}</p></li>
            </ul>
        </nav>
    )
}
 
export default Navigation_bar;