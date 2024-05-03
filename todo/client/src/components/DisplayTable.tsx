import { TableDisplayProps } from '../interfaces/DisplayInterfaces';

export const DisplayTable: React.FC<TableDisplayProps> = ({
  data,
  setData,
  setIsModalOpen,
  isModalOpen,
  taskToEdit,
  setTaskToEdit,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>DisplayTable</th>
        </tr>
      </thead>
    </table>
  );
};
