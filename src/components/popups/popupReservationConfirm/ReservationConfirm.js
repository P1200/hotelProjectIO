import Modal from "../popupBasic/Modal";
import './ReservationConfirm.css';
import { AiOutlineClose } from "react-icons/ai";

function ReservationConfirm({
  open,
  close
}) {
    return (
      <Modal
      open={open}
     >
       <AiOutlineClose onClick={close} id="cross"/>
       <p>Rezerwacja potwierdzona</p>
       <p>Dziękujemy za wybranie naszego hotelu.</p>
    </Modal>
  );
}

export default ReservationConfirm;
