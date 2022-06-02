import Modal from "../popupBasic/Modal";
import './PopupWrongNumberOfRooms.css';
import { AiOutlineClose } from "react-icons/ai";

function PopupWrongNumberOfRooms({
  open,
  close
}) {
    return (
      <Modal
      open={open}
     >
       <AiOutlineClose onClick={close} id="cross"/>
       <div>
        Błędna ilość pokoi.
       </div>
    </Modal>
  );
}

export default PopupWrongNumberOfRooms;
