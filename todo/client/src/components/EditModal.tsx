import { EditModalProps } from '../interfaces/DisplayInterfaces';
import { useState } from 'react';

export const EditModal: React.FC<EditModalProps> = ({
  setIsModalOpen,
  setData,
  taskToEdit,
}) => {
  const [task, setTask] = useState<string>(taskToEdit.task);
  const [when, setWhen] = useState<string>(taskToEdit.when);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //   const handleTaskEdit = (e: React.FormEvent<HTMLInputElement>): void => {
  //     setTask(e.currentTarget.value);
  //   };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form className="modalForm">
          <div>
            <label htmlFor="taskEdit">Task:</label>
            <input
              className="taskEdit"
              type="text"
              value={task}
              name="taskEdit"
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="whenEdit">When:</label>
            <input
              className="whenEdit"
              type="text"
              value={when}
              name="whenEdit"
              onChange={(e) => setWhen(e.target.value)}
            />
          </div>
          <button onClick={handleCloseModal}>Update</button>
          <button onClick={() => handleCloseModal()}>Close</button>
        </form>
      </div>
    </div>
  );
};
