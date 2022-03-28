import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MainTab.css';
import ContactTab from '../contactTab/ContactTab'
import Footer from '../../footer/Footer'
import WelcomeTab from '../welcomeTab/WelcomeTab'
import Navigation_bar from '../../navigation_bar/Navigation_bar';

const MainTab = () => {

    const {t, i18n} = useTranslation();

    //jak chcesz pracować z konkretnym tabem to zmien dla niego w useState FALSE na TRUE!!
    //pamiętaj wszystko inne ma mieć FALSE
    const [isWelcomeTab, setIsWelcomeTab] = useState(true);
    const [isContactTab, setIsContactTab] = useState(false);
    const [isRelaxTab, setIsRelaxTab] = useState(false);
    const [isAttractionsTab, setIsAttractionsTab] = useState(false);
    const [isRestaurantTab, setIsRestaurantTab] = useState(false);
    const [isPriceTab, setIsPriceTab] = useState(false);
    const [isHotelTab, setIsHotelTab] = useState(false);
    ////////////////////////////////////////////////////////////
    return (
        <div className="main-container" >
            <Navigation_bar
            onWelcomeTab={()=>{
                setIsWelcomeTab(true);
                setIsContactTab(false);
                setIsRelaxTab(false);
                setIsAttractionsTab(false);
                setIsRestaurantTab(false);
                setIsPriceTab(false);
                setIsHotelTab(false);
            }}

            onContact={()=>{
                setIsWelcomeTab(false);
                setIsContactTab(true);
                setIsWelcomeTab(false);
                setIsRelaxTab(false);
                setIsAttractionsTab(false);
                setIsRestaurantTab(false);
                setIsPriceTab(false);
                setIsHotelTab(false);
            }}
            onRelax={()=>{
                console.log("onRelax");
                setIsWelcomeTab(false);
                setIsContactTab(false);
                setIsWelcomeTab(false);
                setIsRelaxTab(true);
                setIsAttractionsTab(false);
                setIsRestaurantTab(false);
                setIsPriceTab(false);
                setIsHotelTab(false);
            }}
            onAttractions={()=>{
                console.log("onAttractions");
                setIsWelcomeTab(false);
                setIsContactTab(false);
                setIsWelcomeTab(false);
                setIsRelaxTab(false);
                setIsAttractionsTab(true);
                setIsRestaurantTab(false);
                setIsPriceTab(false);
                setIsHotelTab(false);
            }}
            onRestaurant={()=>{
                console.log("onRestaurant");
                setIsWelcomeTab(false);
                setIsContactTab(false);
                setIsWelcomeTab(false);
                setIsRelaxTab(false);
                setIsAttractionsTab(false);
                setIsRestaurantTab(true);
                setIsPriceTab(false);
                setIsHotelTab(false);
            }}
            onPrice={()=>{
                console.log("onPrice");
                setIsWelcomeTab(false);
                setIsContactTab(false);
                setIsWelcomeTab(false);
                setIsRelaxTab(false);
                setIsAttractionsTab(false);
                setIsRestaurantTab(false);
                setIsPriceTab(true);
                setIsHotelTab(false);
            }}
            onHotel={()=>{
                console.log("onHotel");
                setIsWelcomeTab(false);
                setIsContactTab(false);
                setIsWelcomeTab(false);
                setIsRelaxTab(false);
                setIsAttractionsTab(false);
                setIsRestaurantTab(false);
                setIsPriceTab(false);
                setIsHotelTab(true);
            }}
            />
            {isWelcomeTab===true?<WelcomeTab/>:""}
            {isContactTab===true?<ContactTab/>:""}
            <Footer/>
        </div>
    )
}

export default MainTab;