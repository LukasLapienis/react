import { DisplayTable } from './DisplayTable';
import { DisplayProps, DataInterface } from '../interfaces/DisplayInterfaces';
import { DisplayList } from './DisplayList';
import { useState } from 'react';
import { NewTaskForm } from './NewTaskForm';

export const Display: React.FC<DisplayProps> = ({
  setData,
  data,
  displayType,
  setCreate,
  setTaskToDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<DataInterface>(Object);

  return (
    <main className="flex h-4/5 w-5/6 flex-col justify-between rounded-2xl bg-gray-600">
      {data === null ? (
        <h2>No ToDos</h2>
      ) : displayType === 'List View' ? (
        <DisplayTable
          data={data}
          setData={setData}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
          setTaskToDelete={setTaskToDelete}
        />
      ) : (
        <DisplayList
          data={data}
          setData={setData}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
          setTaskToDelete={setTaskToDelete}
        />
      )}
      <NewTaskForm setCreate={setCreate} />
    </main>
  );
};
