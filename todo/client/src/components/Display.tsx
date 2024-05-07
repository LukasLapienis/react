import { DisplayTable } from './DisplayTable';
import { DisplayProps, DataInterface } from '../interfaces/DisplayInterfaces';
import { DisplayList } from './DisplayList';
import { useState } from 'react';
import { NewTaskForm } from './NewTaskForm';
import { EditModal } from './EditModal';

export const Display: React.FC<DisplayProps> = ({
  data,
  displayType,
  setCreate,
  setTaskToDelete,
  setEditedTask,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<DataInterface>(Object);

  return (
    <main className="flex h-4/5 w-full min-w-fit max-w-4xl flex-col justify-between rounded-2xl bg-gray-600">
      {data === null ? (
        <h2>No ToDos</h2>
      ) : displayType === 'List View' ? (
        <DisplayTable
          data={data}
          setIsModalOpen={setIsModalOpen}
          setTaskToEdit={setTaskToEdit}
          setTaskToDelete={setTaskToDelete}
        />
      ) : (
        <DisplayList
          data={data}
          setIsModalOpen={setIsModalOpen}
          setTaskToEdit={setTaskToEdit}
          setTaskToDelete={setTaskToDelete}
        />
      )}
      {isModalOpen && (
        <EditModal
          setIsModalOpen={setIsModalOpen}
          taskToEdit={taskToEdit}
          setEditedTask={setEditedTask}
        />
      )}
      <NewTaskForm setCreate={setCreate} />
    </main>
  );
};
