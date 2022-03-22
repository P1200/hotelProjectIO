import { useTranslation } from 'react-i18next';
import './Navigation_bar.css';

const Navigation_bar = () => {

    const {t, i18n} = useTranslation();

    return (
        <nav id="nav">
            <div id="logo">
                

        
            
            </div>
            <ul>
                <li><p>{t("nav.contact")}</p></li>
                <li><p>{t("nav.relax")}</p></li>
                <li><p>{t("nav.attractions")}</p></li>
                <li><p>{t("nav.restaurant")}</p></li>
                <li><p>{t("nav.price")}</p></li>
                <li><p>{t("nav.hotel")}</p></li>
            </ul>
        </nav>
    )
}
 
export default Navigation_bar;