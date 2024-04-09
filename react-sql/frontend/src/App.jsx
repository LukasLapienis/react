import './App.css';
import { AnimalsList } from './components/AnimalsList';
import CreateAnimal from './components/CreateAnimal';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [animalList, setAnimalList] = useState([]);
  const [create, setCreate] = useState(null);
  const [edit, setEdit] = useState(null);
  const [showId, setShowId] = useState(false);
  const [updateTime, setUpdateTime] = useState(Date.now());

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
      .put(`http://localhost:5000/zoo/${showId}?id=${showId}`, edit)
      .then((res) => setUpdateTime(Date.now()));
  }, [edit, showId]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/zoo/${id}`)
      .then((res) => setUpdateTime(Date.now()));
  };
  return (
    <div className="App">
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList
        animalList={animalList}
        handleDelete={handleDelete}
        setEdit={setEdit}
        showId={showId}
        setShowId={setShowId}
      />
    </div>
  );
}

export default App;
