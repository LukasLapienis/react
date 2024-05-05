import { TableDisplayProps } from '../interfaces/DisplayInterfaces';
import { EditModal } from './EditModal';

export const DisplayList: React.FC<TableDisplayProps> = ({
  data,
  setData,
  setIsModalOpen,
  isModalOpen,
  taskToEdit,
  setTaskToEdit,
  setTaskToDelete,
}) => {
  const handleModal = (toDoId: string) => {
    setIsModalOpen(true);
    const toDo = data.find((toDo) => toDo._id === toDoId);
    toDo === undefined ? console.log('Task Not Found') : setTaskToEdit(toDo);
  };

  const handleDelete = (toDoId: string) => {
    setTaskToDelete(toDoId);
  };

  return (
    <ul className="p-4">
      {data.map((task) => (
        <li
          key={task._id}
          className="flex justify-between gap-1 rounded-lg border p-2"
        >
          <div className="flex gap-2">
            <input type="checkbox" />
            <input type="checkbox" />
            <div>{task.task}</div>
          </div>
          <div className="flex gap-2">
            <div>{task.when}</div>
            <button onClick={() => handleModal(task._id)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </div>
          {isModalOpen && (
            <EditModal
              data={data}
              setData={setData}
              setIsModalOpen={setIsModalOpen}
              taskToEdit={taskToEdit}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
