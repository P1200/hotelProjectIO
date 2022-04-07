import './RoomWindow.css';

const RoomWindow = () => {

    return (
        <div>
           <p> Pokój x osobowy</p>
           <div id="Picture"></div>

            <div id="Parameters">
                <ul>
                    <img id="bed"></img><li>Łóżko jednoosobowe</li>
                    <img id="airCon"></img><li>Klimatyzacja</li>
                    <img id="wiFi"></img><li>Bezpłatne Wi-Fi</li>
                </ul>
                <ul>
                    <li>bezpłatny zestaw kosmetyków</li>
                    <li>toaleta</li>
                    <li>wanna lub prysznic</li>
                    <li>ręczniki</li>
                    <li>szafa</li>
                    <li>TV</li>
                    <li>lodówka</li>
                    <li>telefon</li>
                    <li>biurko</li>
                    <li>suszarka do włosów</li>
                    <li>balkon</li>
                </ul>
                {/*<input type="checkbox">dostawka</input>
                <input type="checkbox">śniadanie</input> */}
            </div>
            <div>
                <select>
                    <p>Liczba pokoi</p>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <input type="submit" value="Rezerwuj"></input>
            </div>
        </div>
    )
}
 
export default RoomWindow;