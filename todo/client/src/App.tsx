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

  useEffect(() => {
    axios
      .get<{ toDos: DataInterface[] }>('http://localhost:5000/api/toDo')
      .then((res) => {
        setData(res.data.toDos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateTime]);

  useEffect(() => {
    if (create === Object) {
      return;
    }
    axios
      .post('http://localhost:5000/api/toDo', create)
      .then(() => setUpdateTime(Date.now()));
  }, [create]);

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
      />
    </>
  );
}

export default App;
