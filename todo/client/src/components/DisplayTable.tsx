import { TableDisplayProps } from '../interfaces/DisplayInterfaces';

export const DisplayTable: React.FC<TableDisplayProps> = ({}) => {
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
