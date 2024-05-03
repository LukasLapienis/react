export interface DataInterface {
  task: string;
  when: string;
  id: string;
}

export type DisplayType = 'Table View' | 'List View';

export interface HeaderProps {
  setDisplayType: React.Dispatch<React.SetStateAction<DisplayType>>;
  displayType: DisplayType;
  setData: React.Dispatch<React.SetStateAction<[] | DataInterface[]>>;
}

export interface TableDisplayProps {
  setData: React.Dispatch<React.SetStateAction<[] | DataInterface[]>>;
  data: DataInterface[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setTaskToEdit: React.Dispatch<React.SetStateAction<DataInterface>>;
  taskToEdit: DataInterface;
}

export interface DisplayProps {
  setData: React.Dispatch<React.SetStateAction<[] | DataInterface[]>>;
  data: DataInterface[];
  displayType: DisplayType;
}

export interface EditModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataInterface[];
  setData: React.Dispatch<React.SetStateAction<DataInterface[]>>;
  taskToEdit: DataInterface;
}
