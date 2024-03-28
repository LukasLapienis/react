import React from "react";

export const PirmoModal = ({ dataFromAPI, userId, setIsOpen }) => {
  const user = dataFromAPI.find((el) => el.id === userId);
  const handleModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="modal-overlay" onClick={handleModal}>
      <div
        className="modal"
        style={{ backgroundColor: "cyan", height: "200px", width: "200px" }}
      >
        <h2 onClick={handleModal}>&times;</h2>
        <img className="modalImg" src={user.avatar} alt={user.firstName} />
      </div>
    </div>
  );
};
