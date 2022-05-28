import './RestaurantTab.css';
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

const RestaurantTab = () => {

    return (
        <div >
            <div id="restaurantImg"> 
            <p id="headerRest">RESTAURACJA</p>
            </div>
            <div id="RestMenu">
                <h1>Menu dnia (w każdą niedzielę)</h1>
                <p className='position'><BsPlayFill className='arrow'/> Rosół z kaczki<div className='price'>15zł</div></p>
                <p className='position'>
                    <p className='DishwDesc'><BsPlayFill className='arrow'/>Sznycel z indyka<div className='price'>30zł</div></p>
                    <p className='DescDish'>z frytkami/ziemniakami i surówką z marchewki</p>
                </p> 
                <p className='position'>
                    <p className='DishwDesc'><BsPlayFill className='arrow'/>Szarlotka na ciepło<div className='price'>25zł</div></p>
                    <p className='DescDish'>z sosem czekoladowym, lodami i bitą śmietaną</p>
                </p>
            </div>
            <div id="RestaStart">
                Restauracja
                <div id="aboutRestaurant">
                    <div className='restInfo'>Restauracja czynna w godzinach od 12:30 do 22:30</div>
                    <div className="restInfo">Śniadania: 7:00-11:30</div>
                    <div className="restInfo">Rezerwacje: +48 876 437 098</div>
                </div>
                
            </div>

            
            <div id="offers">
                <h1>Oferta</h1>
                <div className='offer'> 
                    <div id="pesiota"></div>
                    Śniadania <AiOutlineRight/>
                </div>
                <div className='offer'>
                    <div id="pesiota"></div>
                    Menu Restauracyjne <AiOutlineRight/>
                </div>
            </div>
        </div>
    )
}

export default RestaurantTab;