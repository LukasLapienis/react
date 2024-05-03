import { DisplayTable } from './DisplayTable';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataType } from '../interfaces/DataInterfaces';

export const Display = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    axios.get('').then((res) => {
      const newArray = res.data;
      setData(newArray);
    });
  }, []);

  return (
    <main>
      <DisplayTable data={data} />
    </main>
  );
};
