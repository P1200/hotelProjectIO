import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {

    const {t, i18n} = useTranslation();

    return (
        <div id="foot">
           <p id="copyright"> Copyright © 2022 MWLzG - All Rights Reserved </p>
        </div>
    )
}
 
export default Footer;