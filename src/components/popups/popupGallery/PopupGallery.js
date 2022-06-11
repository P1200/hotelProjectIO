import Modal from "../popupBasic/Modal";
import './PopupGallery.css';
import { AiOutlineClose } from "react-icons/ai";
import { getGallery } from "./../../../apiOperations/apiGet";
import React, { useState } from 'react';
function PopupGallery({
  open,
  close
}) {
  const [images,setImages]=useState([])
  return (
    <Modal
      open={open}
    >
      <div
        onLoad={async () => {
          setImages(await getGallery())
        }}>
        <AiOutlineClose onClick={close} id="cross" />
        <div id="HotelHistory">
          <div onClick={async ()=>console.logg(await getGallery()) }>gagl</div>
        </div>
      </div>
    </Modal>
  );
}

export default PopupGallery;
