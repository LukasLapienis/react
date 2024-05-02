export const Header = () => {
  return (
    <header className="flex w-full justify-between">
      <h1 className="text-4xl">To Do List</h1>
      <div className="flex gap-4">
        <button className="headerButton">Table View</button>
        <button className="headerButton">Clear List</button>
      </div>
    </header>
  );
};
