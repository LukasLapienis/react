import React, { useState } from 'react';
import { Pirmas } from './Pirmas';
import { Antras } from './Antras'

export const Container = () => {
  const [task, setTask] = useState('Pirmas');

  const taskHandler = () => {
    setTask((prev) => prev === 'Pirmas' ? 'Antras' : 'Pirmas');
  };

  return (
    <div className="container">
        <button onClick={taskHandler}>Switch Task</button>
      {task === "Pirmas" ? <Pirmas /> : <Antras />}

    </div>
  );
};