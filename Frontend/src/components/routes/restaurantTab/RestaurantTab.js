import './RestaurantTab.css';
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

const RestaurantTab = () => {

    return (
        <div >
            <div id="restaurantImg"> RESTAURACJA</div>
            <div>
                <div> Restauracja</div>
                <div>o restauracji</div>
            </div>

            <div>
                <p>Menu dnia (w każdą niedzielę)</p>
                <p><BsPlayFill/> Rosół z kaczki</p>
                <p>
                    <p><BsPlayFill/>Sznycel z indyka</p>
                    <p>z frytkami/ziemniakami i surówką z marchewki</p>
                </p> 
                <p>
                    <p><BsPlayFill/>Szarlotka na ciepło</p>
                    <p>z sosem czekoladowym, lodami i bitą śmietaną</p>
                </p> 

            </div>

            <div>
                Oferta
                <div> 
                    <div id="pesiota"></div>
                    Restauracja <AiOutlineRight/>
                </div>
                <div>
                    <div id="pesiota"></div>
                    o restauracji <AiOutlineRight/>
                </div>
            </div>
        </div>
    )
}

export default RestaurantTab;