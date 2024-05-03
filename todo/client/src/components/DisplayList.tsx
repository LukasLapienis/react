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
    toDo === undefined ? console.log('nerasta') : setTaskToEdit(toDo);
  };
  return (
    <ul>
      {data.map((task, i) => (
        <li key={i}>
          {task.task} {task.when}{' '}
          <button onClick={() => handleModal(task.id)}>Edit</button>
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
