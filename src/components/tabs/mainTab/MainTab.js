import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MainTab.css';
import Footer from '../../footer/Footer'
import WelcomeTab from '../welcomeTab/WelcomeTab'
import ContactTab from '../contactTab/ContactTab'
import Navigation_bar from '../../navigation_bar/Navigation_bar';

const MainTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div className="main-container" >
            <Navigation_bar/>
           <ContactTab/>
            <Footer/>
        </div>
    )
}

export default MainTab;