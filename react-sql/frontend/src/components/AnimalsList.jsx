import React, { useState } from 'react';
import { Animal } from './Animal';
import { EditModal } from './EditModal';

export const AnimalsList = ({
  animalList,
  handleDelete,
  setEdit,
  showId,
  setShowId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="animalList">
      {animalList === 'undefined' ? (
        <div>Loading...</div>
      ) : (
        animalList.map((animal) => {
          return (
            <Animal
              key={animal.id}
              animal={animal}
              handleDelete={handleDelete}
              setShowId={setShowId}
              setIsModalOpen={setIsModalOpen}
            />
          );
        })
      )}
      {isModalOpen && (
        <EditModal
          showId={showId}
          setIsModalOpen={setIsModalOpen}
          animalList={animalList}
          setEdit={setEdit}
        />
      )}
    </div>
  );
};
