import Modal from "../popupBasic/Modal";
import './PopupGallery.css';
import { AiOutlineClose } from "react-icons/ai";
import {getGallery} from "./../../../apiOperations/apiGet";
import React, {useState } from 'react';
function PopupGallery({
  open,
  close
}) {
    return (
      <Modal
      open={open}
     >
       <AiOutlineClose onClick={close} id="cross"/>
       <div id="HotelHistory">
        gagl
       </div>
    </Modal>
  );
}

export default PopupGallery;
