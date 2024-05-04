import { TableDisplayProps } from '../interfaces/DisplayInterfaces';
import { EditModal } from './EditModal';

export const DisplayList: React.FC<TableDisplayProps> = ({
  data,
  setData,
  setIsModalOpen,
  isModalOpen,
  taskToEdit,
  setTaskToEdit,
}) => {
  const handleModal = (toDoId: string) => {
    setIsModalOpen(true);
    const toDo = data.find((toDo) => toDo.id === toDoId);
    toDo === undefined ? console.log('Task Not Found') : setTaskToEdit(toDo);
  };
  return (
    <ul className="p-4">
      {data.map((task) => (
        <li
          key={task.id}
          className="flex justify-between gap-1 rounded-lg border p-2"
        >
          <div className="flex gap-2">
            <input type="checkbox" />
            <input type="checkbox" />
            <div>{task.task}</div>
          </div>
          <div className="flex gap-2">
            <div>{task.when}</div>
            <button onClick={() => handleModal(task.id)}>Edit</button>
            <button>Delete</button>
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
