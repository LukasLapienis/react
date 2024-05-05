import { NewTaskFormProps } from '../interfaces/DisplayInterfaces';
import { useState } from 'react';

export const NewTaskForm: React.FC<NewTaskFormProps> = ({ setCreate }) => {
  const [task, setTask] = useState<string>('');
  const [when, setWhen] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreate({ task: task, when: when });
    alert('new task added');
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex w-full justify-evenly rounded-b-2xl bg-slate-500 p-4"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className="w-1/2 rounded-lg text-center"
      />
      <input
        type="text"
        value={when}
        onChange={(e) => setWhen(e.target.value)}
        placeholder="When?"
        className="w-1/4 rounded-lg text-center"
      />
      <button type="submit">Add</button>
    </form>
  );
};
