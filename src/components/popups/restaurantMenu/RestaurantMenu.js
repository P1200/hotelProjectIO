import Modal from "../popupBasic/Modal";
import './RestaurantMenu.css';
import { AiOutlineClose } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

function RestaurantMenu({
  open,
  close
}) {
    return (
      <Modal
      open={open}
     >
       <AiOutlineClose onClick={close} id="cross"/><h1>Menu Restauracji</h1>
       <div className="page">
          <div classname='dishtype'>
            <h2>Przystawki:</h2>
            <p className='position'>
              <div>
                <BsPlayFill className='arrow'/> Łosoś wędzony na rukoli 
              </div>
              <div className='price'>15zł</div>
              <div  className='DescDish'>
              z dressingiem malinowym i grzanką bazyliową
              </div>
            </p>
            <p className='position'>
              <div>
                <BsPlayFill className='arrow'/> Sałatka z kurczakiem i gorgonzolą 
              </div>
              <div className='price'>30zł</div>
              <div  className='DescDish'>
              z cytrusowym dressingiem
              </div>
            </p>
            <p className='position'>
              <div>
                <BsPlayFill className='arrow'/> Filety rybne 
              </div>
              <div className='price'>25zł</div>
              <div  className='DescDish'>
                w glazurze cebulowo-pomidorowej
              </div>
            </p>
          </div>   
          <div classname='dishtype'>
            <h2>Zupy:</h2>
            <p
             className='position'>
              <BsPlayFill className='arrow'/> Rosół z kołdunami
              <div className='price'>15zł</div>
            </p>
            <p className='position'>
               <BsPlayFill className='arrow'/>  Zupa cebulowa z serową grzanką
              <div className='price'>30zł</div>
            </p>
            <p className='position'>
               <BsPlayFill className='arrow'/> Zupa rybna z suszonymi pomidorami
              <div className='price'>25zł</div>
            </p>
          </div>
       </div>
       <div className="page">
          <div classname='dishtype'>
          <h2>Dania główne:</h2>
            <p className='position'>
              <div>
               <BsPlayFill className='arrow'/>  Sznycel z indyka 
              </div>
              <div className='price'>15zł</div>
              <div  className='DescDish'>z frytkami/ziemniakami i surówką z marchewki
              </div>
            </p>
            <p className='position'>
              <div>
                <BsPlayFill className='arrow'/>  Sandacz z pieca na risotto
              </div>
              <div className='price'>30zł</div>
              <div  className='DescDish'>
                z warzywami duszonymi w maśle
              </div>
            </p>
            <p className='position'>
              <div>
               <BsPlayFill className='arrow'/>  Łosoś nadziewany mozarellą
              </div>
              <div className='price'>25zł</div>
              <div  className='DescDish'>
                z ziemniakami oprószonymi świeżym koprem
              </div>
            </p>
          </div>  
          <div classname='dishtype'>
          <h2>Desery:</h2>
            <p className='position'>
              <div>
                <BsPlayFill className='arrow'/>  Szarlotka na ciepło
              </div>
              <div className='price'>15zł</div>
              <div  className='DescDish'>
                z sosem czekoladowym, lodami i bitą śmietaną
              </div>
            </p>
            <p className='position'>
                 <BsPlayFill className='arrow'/> Suflet czekoladowy
              <div className='price'>30zł</div>
            </p>
            <p className='position'>
               <BsPlayFill className='arrow'/>  Panna cotta z malinami
              <div className='price'>25zł</div>
            </p>
          </div>
       </div>
       <div id="drinks">
       <h2 id='drinktypes'>Napoje:</h2>
          <div className="pagealko">
          <h2>bezalkoholowe</h2>
            <p className='position'>
               <BsPlayFill className='arrow'/>  Woda niegazowana
              <div className='price'>15zł</div>
            </p>
            <p className='position'>
              <div>
               <BsPlayFill className='arrow'/>  Świeżo wyciskany sok 
              </div>
              <div className='price'>30zł</div>
              <div  className='DescDish'>
                pomarańcz lub grejfrut
              </div>
            </p>
            <p className='position'>
               <BsPlayFill className='arrow'/>  Cola
              <div className='price'>25zł</div>
            </p>
          </div>  
          <div className="pagealko">
          <h2>alkoholowe</h2>
            <p className='position'>
              <BsPlayFill className='arrow'/>  Wino czerwone
              <div className='price'>15zł / 150zł</div>
            </p>
            <div className='position'>
              <BsPlayFill className='arrow'/>   Wino białe
              <div className='price'>30zł / 200zł</div>
            </div>
            <p className='position'>
               <BsPlayFill className='arrow'/>  Wódka
              <div className='price'>10zł / 100zł</div>
            </p>
          </div>
       </div>
       
    </Modal>
  );
}

export default RestaurantMenu;
