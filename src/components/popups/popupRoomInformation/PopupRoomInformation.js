import Modal from "../popupBasic/Modal";
import './PopupRoomInformation.css';
import { AiOutlineClose } from "react-icons/ai";

function PopupRoomInformation({
  open,
  close,
  room
}) {
    return (
      <Modal
      open={open}
     >
       <AiOutlineClose onClick={close} id="cross"/>
       <div>
        {room.kind}
        <div>
          {room.description}
        </div>
        <div>
        Pokój ze standardowym wyposażeniem tj. łóżko, biurko, szafa, TV oraz prywatna łazienka.
        </div>
       </div>
    </Modal>
  );
}

export default PopupRoomInformation;
