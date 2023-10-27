import React, { useState } from "react";
import "./modal.css";
export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>Hello world</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            debitis nobis, dolor doloremque aspernatur nihil totam impedit
            maxime recusandae cupiditate officiis earum vel voluptate deserunt
            asperiores pariatur sit vero temporibus! Magnam debitis iste nemo
            aliquid at nesciunt, tempore reiciendis! Libero, et voluptatem odit
            ab velit quas nisi optio ratione corrupti temporibus, placeat fugiat
            iusto. Iure nobis sint harum debitis!
          </p>
          <button className="close-modal" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
