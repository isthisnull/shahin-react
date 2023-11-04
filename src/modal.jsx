import React, { useState } from "react";
import "./modal.css";
export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const mamad = 9;
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
              <p className="offerTitle">Place offer</p>
              <p>
                You are about to place an offer, select the amount and payment
                token
              </p>
              <div className="token">
                <button>WETH</button>
                <button>
                  {" "}
                  <img src="" />
                  CUPS
                </button>
              </div>
              <input type="number" min={0} step={0.1} />
            </div>
            <div className="timeSection">
              <p className="timeTitle">Start time</p>
              <p>Set when this offer expires (defaults to 10 years from now)</p>
              <div className="dateTime">
                <input type="date" className="date" />
                <input type="time" className="time" />
              </div>
              <div className="balance">
                <p>Available Balance:</p>
                <p> {mamad} CUPS</p>
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
