export interface NewTaskInterface {
  task: string;
  when: string;
}

export interface DataInterface extends NewTaskInterface {
  _id: string;
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
  setTaskToDelete: React.Dispatch<React.SetStateAction<string>>;
}

export interface DisplayProps {
  setData: React.Dispatch<React.SetStateAction<[] | DataInterface[]>>;
  data: DataInterface[];
  displayType: DisplayType;
  setCreate: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
  setTaskToDelete: React.Dispatch<React.SetStateAction<string>>;
}

export interface EditModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataInterface[];
  setData: React.Dispatch<React.SetStateAction<DataInterface[]>>;
  taskToEdit: DataInterface;
}

export interface NewTaskFormProps {
  setCreate: React.Dispatch<React.SetStateAction<NewTaskInterface>>;
}
