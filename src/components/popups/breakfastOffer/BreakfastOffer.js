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
       <div>Oferta śniadaniowa</div><AiOutlineClose onClick={close} id="cross"/>
       <div>
          <div>
            <div>
              danie
            </div>
            <div>
              cena
            </div>
          </div>
          <div>
            <div>
              danie
            </div>
            <div>
              cena
            </div>
          </div>
          <div>
            <div>
              danie
            </div>
            <div>
              cena
            </div>
          </div>
          <div>
            <div>
              danie
            </div>
            <div>
              cena
            </div>
          </div>
          <div>
            <div>
              danie
            </div>
            <div>
              cena
            </div>
          </div>
       </div>
       <div>
          Kawa i herbata dostępna za darmo dla każdego gościa hotelowego w godzinach śniadaniowych
       </div>
       <div>
          Zapytaj obsługę o danie kucharza, aby spróbować specjałów naszych artystów!!!
       </div>
    </Modal>
  );
}

export default BreakfastOffer;
