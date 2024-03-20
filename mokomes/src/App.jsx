import { useState } from "react";
import { A } from "./components/A";
import { B } from "./components/B";
import { C } from "./components/C";
import "./App.css";
import { AA } from "./components/AA";
import { CC } from "./components/CC";
import { BB } from "./components/BB";
import { D } from "./components/D";
import { E } from "./components/E";
import { F } from "./components/F";
import { G } from "./components/G";
import { H } from "./components/H";

function App() {
  const [sqArr, setSqArr] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleGenerate = () => {
    setSqArr((prev) => [...prev, sqArr.length - 1 + 1]);
  };

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const [letterA, setLetterA] = useState("");
  const [letterC, setLetterC] = useState("");

  const handleClick = () => {
    setLetterA((prev) => (prev === "" ? "A" : prev === "A" ? "C" : "A"));
    setLetterC((prev) => (prev === "" ? "C" : prev === "C" ? "A" : "C"));
  };

  const [letterB, setLetterB] = useState("");

  const handleClickB = () => {
    setLetterB((prev) => (prev === "B" ? "" : "B"));
  };

  const [form, setForm] = useState("kvadr");
  const handleClickD = () => {
    setForm((prev) => (prev === "kvadr" ? "apskr" : "kvadr"));
  };

  const [formE, setFormE] = useState("kvadr");
  const handleClickFormE = () => {
    setFormE((prev) => (prev === "kvadr" ? "apskr" : "kvadr"));
  };

  const generateRandNumber = () => {
    return Math.floor(Math.random() * (25 - 5 + 1)) + 5;
  };
  const [randNumber, setRandNumber] = useState(generateRandNumber);
  const handleClickE = () => {
    setRandNumber(generateRandNumber);
  };

  const [numberF, setNumberF] = useState(0);
  const handleClickPlus = () => {
    setNumberF((prev) => (prev += 1));
  };
  const handleClickMinus = () => {
    setNumberF((prev) => (prev -= 3));
  };

  return (
    <div className="App">
      <B
        handleGenerate={handleGenerate}
        handleCounter={handleCounter}
        sqlLenght={sqArr.length}
      />
      <A sqArr={sqArr} number={counter} />
      <C number={counter} />
      <AA letterA={letterA} handleClick={handleClick} />
      <CC letterC={letterC} />
      <BB letterB={letterB} handleClickB={handleClickB} />
      <D handleClickD={handleClickD} form={form} />
      <E
        handleClickFormE={handleClickFormE}
        formE={formE}
        handleClickE={handleClickE}
        randNumber={randNumber}
      />
      <F
        handleClickPlus={handleClickPlus}
        handleClickMinus={handleClickMinus}
        numberF={numberF}
      />
      <G />
      <H />
    </div>
  );
}

export default App;
