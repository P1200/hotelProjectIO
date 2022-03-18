import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MainTab.css';
import Footer from '../../footer/Footer'

const MainTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div className="main-container" style={{display: 'inline'}}>
            <div >NAV</div>
            <div>
            main div 
            <br/>
            {t('commonTexts.test')}
            </div>
            <Footer/>
        </div>
    )
}

export default MainTab;