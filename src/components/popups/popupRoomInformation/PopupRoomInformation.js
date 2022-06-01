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
       {room.path}
       <div>
        {room.kind}
        <div>
          {room.description}
        </div>
       </div>
    </Modal>
  );
}

export default PopupRoomInformation;
