import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MainTab.css';

const MainTab = () => {

    const {t, i18n} = useTranslation();

    return (
        <div className="main-container">
            main div 
            <br/>
            {t('commonTexts.test')}
        </div>
    )
}

export default MainTab;