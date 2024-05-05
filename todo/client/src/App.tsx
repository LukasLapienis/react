import './App.css';
import { Display } from './components/Display';
import { Header } from './components/Header';
import { useState } from 'react';
import { DisplayType, DataInterface } from './interfaces/DisplayInterfaces';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [displayType, setDisplayType] = useState<DisplayType>('Table View');
  const [data, setData] = useState<DataInterface[] | []>([]);
  const [updateTime, setUpdateTime] = useState(Date.now());
  const [create, setCreate] = useState(Object);
  const [taskToEdit, setTaskToEdit] = useState(Object);
  const [taskToDelete, setTaskToDelete] = useState<string>('');

  useEffect(() => {
    axios
      .get<{ toDos: DataInterface[] | [] }>('http://localhost:5000/api/toDo')
      .then((res) => {
        setData(res.data.toDos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateTime]);

  useEffect(() => {
    if (Object.keys(create).length === 0) {
      return;
    }
    axios
      .post('http://localhost:5000/api/toDo', create)
      .then(() => setUpdateTime(Date.now()));
  }, [create]);

  useEffect(() => {
    if (Object.keys(taskToEdit).length === 0) {
      return;
    }
    axios
      .post(`http://localhost:5000/api/toDo/${taskToEdit}`, taskToEdit)
      .then(() => setUpdateTime(Date.now()));
  }, [taskToEdit]);

  useEffect(() => {
    if (taskToDelete === '') {
      return;
    }
    console.log(taskToDelete);
    axios
      .delete(`http://localhost:5000/api/toDo/${taskToDelete}`)
      .then(() => setUpdateTime(Date.now()));
  }, [taskToDelete]);

  return (
    <>
      <Header
        setDisplayType={setDisplayType}
        displayType={displayType}
        setData={setData}
      />
      <Display
        displayType={displayType}
        data={data}
        setData={setData}
        setCreate={setCreate}
        setTaskToDelete={setTaskToDelete}
      />
    </>
  );
}

export default App;
