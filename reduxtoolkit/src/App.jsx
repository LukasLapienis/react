import "./App.css";
import { AddItems } from "./components/AddItems";
import { ShoppingItemsList } from "./components/ShoppingItemsList";

function App() {
  return (
    <div className="App">
      <AddItems />
      <ShoppingItemsList />
    </div>
  );
}

export default App;
