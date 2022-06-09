import Modal from "../popupBasic/Modal";
import './BreakfastOffer.css';
import { AiOutlineClose } from "react-icons/ai";

function BreakfastOffer({
  open,
  close
}) {
    return (
      <Modal
      open={open}
     >
       <AiOutlineClose onClick={close} id="cross"/><h1>Oferta śniadaniowa</h1>
       <div>
          <div className='positionpop'>
            <div className='DishwDescpop'>
            Słodkie naleśniki
            </div>
            <div className='pricepop'>
              15zł
            </div>
            <div className='DescDishpop'>
            Twarożek na słodko, owoce, granola
            </div>
          </div>
          <div className='positionpop'>
            <div className='DishwDescpop'>
            Jajecznica z 3 jaj
            </div>
            <div className='pricepop'>
              13zł
            </div>
            <div className='DescDishpop'>
              Gzik, sałatka z pomidorów, pieczywo, masło
            </div>
          </div>
          <div className='positionpop'>
            <div className='DishwDescpop'>
            Zielone śniadanie
            </div>
            <div className='pricepop'>
              18zł
            </div>
            <div className='DescDishpop'>
              Fasolka w sosie pomidorowym, pasta bezjajeczna z tofu, pomidor, tapenade z czarnych oliwek, pieczywo
            </div>
          </div>
          <div className='positionpop'>
            <div className='DishwDescpop'>
            Tosty z łososiem
            </div>
            <div className='pricepop'>
              19zł
            </div>
            <div className='DescDishpop'>
              Sadzone jajko, twarożek, pomidor, zioła, sałaty, zielony majonez
            </div>
          </div>
          <div className='positionpop'>
            <div className='DishwDescpop'>
            Serdelek
            </div>
            <div className='pricepop'>
              cena
            </div>
            <div className='DescDishpop'>
              Sos musztardowy, sałatka z pomidorów, tosty, masło, boczek
            </div>
          </div>
       </div>
       <div id='ctpromo'>
          Kawa i herbata dostępna za darmo dla każdego gościa hotelowego w godzinach śniadaniowych
       </div>
       <div id="flex">
          Zapytaj obsługę o danie kucharza, aby spróbować specjałów naszych artystów!!!
       </div>
    </Modal>
  );
}

export default BreakfastOffer;
