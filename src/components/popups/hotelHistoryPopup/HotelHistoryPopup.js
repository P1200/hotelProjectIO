
import { useState } from 'react';
import Modal from "../popupBasic/Modal"
import './HotelHistoryPopup.css';
import { AiOutlineClose } from "react-icons/ai";

function HotelHistoryPopup({
  open,
  close
}) {
  const [date, setDate] = useState(new Date());

  return (
      <Modal
      open={open}
     >
       <AiOutlineClose onClick={close} />
       <div>
        Hotel Fun&Relax założony w roku 2022 przez 4 studentów informatyki pierwszego stopnia z tytułem inżyniera z Zielonej Góry,
        którzy nie mieli pomysłu na projekt na zaliczenie przedmiotu, jakim jest Inżynieria 
        Oprogramowania prowadzona przez Pana doktora inżyniera Tomasza Gratkowskiego. Hotel kieruje
        się znanym przez wszystkich studentów mottem „byle na 3”, co można zobaczyć w zarządzaniu naszą placówką. Jeśli to przeczytałeś w recepcji możesz podac tajne hesło "ANSI C", dzięki, któremu kupon rabatowy na ciasta w naszej restauracji.
       </div>
    </Modal>
  );
}

export default HotelHistoryPopup;
