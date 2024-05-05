import { TableDisplayProps } from '../interfaces/DisplayInterfaces';

export const DisplayList: React.FC<TableDisplayProps> = ({
  data,
  setIsModalOpen,
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
    <ul className="flex flex-col gap-2 p-4">
      {data.map((task) => (
        <li
          key={task._id}
          className="flex justify-between gap-1 rounded-lg border-2 border-gray-500 p-2 hover:bg-gray-500"
        >
          <div className="flex gap-2">
            <input type="checkbox" className=" cursor-pointer" />
            <input type="checkbox" className=" cursor-pointer" />
            <div>{task.task}</div>
          </div>
          <div className="flex gap-2">
            <div>{task.when}</div>
            <button onClick={() => handleModal(task._id)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
