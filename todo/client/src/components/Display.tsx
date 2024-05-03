import { DisplayTable } from './DisplayTable';
import { DisplayProps, DataInterface } from '../interfaces/DisplayInterfaces';
import { DisplayList } from './DisplayList';
import { useState } from 'react';

export const Display: React.FC<DisplayProps> = ({
  setData,
  data,
  displayType,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<DataInterface>(Object);

  return (
    <main>
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
        />
      ) : (
        <DisplayList
          data={data}
          setData={setData}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
      )}
    </main>
  );
};
