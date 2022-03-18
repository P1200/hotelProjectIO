import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MainTab.css';
import Footer from '../../footer/Footer'
import WelcomeTab from '../welcomeTab/WelcomeTab'

const MainTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div className="main-container" >
            <div >NAV</div>
           <WelcomeTab/>
            <Footer/>
        </div>
    )
}

export default MainTab;