import './RoomWindow.css';
import { BsAsterisk, BsWifi, BsCheckLg } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";

const RoomWindow = ({
    image,
    price,
    roomName,
    howMannyAvaliabeRooms,
    tmpHowManyReserved
}) => {
    return (
        <div id="roomWindow">
            <div> {roomName}</div>
            <div id="picture">{image}</div>
            <div id="parameters">
                <p><IoIosBed/> Łóżko jednoosobowe</p>
                <p><BsAsterisk/>  Klimatyzacja</p>
                <p><BsWifi/> Wi-Fi</p>
                <p>
                    <BsCheckLg/>bezpłatny zestaw kosmetyków
                    <BsCheckLg/>toaleta
                    <BsCheckLg/>wanna lub prysznic
                    <BsCheckLg/>ręczniki
                    <BsCheckLg/>szafa
                    <BsCheckLg/>TV
                    <BsCheckLg/>lodówka
                    <BsCheckLg/>telefon
                    <BsCheckLg/>biurko
                    <BsCheckLg/>suszarka do włosów
                    <BsCheckLg/>balkon
                </p>
            </div>
            Cena za pokój: {price} zł
            <p>
               <p>  Liczba wolnych pokoi: {howMannyAvaliabeRooms}</p>
               <p>  Liczba zarezerwowanych pokoi: {tmpHowManyReserved}</p>
            </p> 
        </div>
    )
}
 
export default RoomWindow;