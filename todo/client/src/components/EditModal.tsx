import { EditModalProps } from '../interfaces/DisplayInterfaces';
import { useState } from 'react';

export const EditModal: React.FC<EditModalProps> = ({
  setIsModalOpen,
  taskToEdit,
  setEditedTask,
}) => {
  const [task, setTask] = useState<string>(taskToEdit.task);
  const [when, setWhen] = useState<string>(taskToEdit.when);

  const handleCloseModal = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditedTask({ task: task, when: when, _id: taskToEdit._id });
    setIsModalOpen(false);
    alert('updated');
  };

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => handleEdit(e)} className="modalForm">
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
          <button type="submit">Update</button>
          <button onClick={(e) => handleCloseModal(e)}>Close</button>
        </form>
      </div>
    </div>
  );
};
