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
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="offer">
              <h1>Place offer</h1>
              <p>
                You are about to place an offer, select the amount and payment
                token
              </p>
              <button>WETH</button>
              <button>CUPS</button>
              <input type="number" />
            </div>
            <div className="timeSection">
              <h1>Start time</h1>
              <p>Set when this offer expires (defaults to 10years from now)</p>
              <div className="dateTime">
                <input type="date" className="date" />
                <input type="time" className="time" />
              </div>
              <div className="balance">
                <p>Available Balance:</p>
                <p> {}CUPS</p>
              </div>
              <button>Make Offer</button>
            </div>
            <button className="close-modal" onClick={toggleModal}></button>
          </div>
        </div>
      )}
    </>
  );
}
