import React, { useState } from "react";
import { Animal } from "./Animal";
import { EditModal } from "./EditModal";

export const AnimalsList = ({
  animalList,
  handleDelete,
  setEdit,
  setEditId,
  editId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="animalList">
      {animalList ? (
        animalList.map((animal) => {
          return (
            <Animal
              key={animal.id}
              animal={animal}
              handleDelete={handleDelete}
              setIsModalOpen={setIsModalOpen}
              setEditId={setEditId}
            />
          );
        })
      ) : (
        <div>Loading...</div>
      )}
      {isModalOpen && (
        <EditModal
          setIsModalOpen={setIsModalOpen}
          animalList={animalList}
          setEdit={setEdit}
          editId={editId}
          setEditId={setEditId}
        />
      )}
    </div>
  );
};
