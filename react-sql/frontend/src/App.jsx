import './App.css';
import { AnimalsList } from './components/AnimalsList';
import CreateAnimal from './components/CreateAnimal';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [animalList, setAnimalList] = useState([]);
  const [create, setCreate] = useState(null);
  const [edit, setEdit] = useState(null);
  const [updateTime, setUpdateTime] = useState(Date.now());
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/zoo/${id}`)
      .then((res) => setUpdateTime(Date.now()));
  };

  useEffect(() => {
    axios.get('http://localhost:5000/zoo/').then((res) => {
      setAnimalList(res.data);
    });
  }, [updateTime]);

  useEffect(() => {
    if (create === null) {
      return;
    }
    axios
      .post('http://localhost:5000/zoo/', create)
      .then((res) => setUpdateTime(Date.now()));
  }, [create]);

  useEffect(() => {
    if (edit === null) {
      return;
    }
    axios
      .put(`http://localhost:5000/zoo/${editId}`, edit)
      .then((res) => setUpdateTime(Date.now()));
  }, [edit, editId]);

  const sortHandler = (value) => {
    const copy = [...animalList];
    switch (value) {
      case 'a-z':
        setAnimalList(copy.sort((a, b) => a.weight - b.weight));
        break;
      case 'z-a':
        setAnimalList(copy.sort((a, b) => b.weight - a.weight));
    }
  };

  return (
    <div className="App">
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList
        animalList={animalList}
        handleDelete={handleDelete}
        setEdit={setEdit}
        setEditId={setEditId}
        editId={editId}
      />
    </div>
  );
}

export default App;
