import { useState } from "react";

import "./App.css";
import { A } from "./components/A";
import { C } from "./components/C";
import { CatInput } from "./components/CatInput";
import { D } from "./components/D";
import { E } from "./components/E";
import { F } from "./components/F";
import { G } from "./components/G";
import { H } from "./components/H";
import { I } from "./components/I";
import { Forms } from "./components/Input";

function App() {
  const handleShow = () => {
    setIsDisplayed((prev) => !prev);
  };

  const [isDisplayed, setIsDisplayed] = useState(false);

  const [squareColor, setSquareColor] = useState(false);

  const handleRefresh = (show) => {
    setSquareColor(show ? "green" : "blue");
  };

  return (
    <div className="App">
      <Forms />
      <A />
      <C />
      <D />
      <E />
      <F handleShow={handleShow} />
      <G isDisplayed={isDisplayed} />
      <H handleRefresh={handleRefresh} />
      <I squareColor={squareColor} />
      <CatInput />
    </div>
  );
}

export default App;
