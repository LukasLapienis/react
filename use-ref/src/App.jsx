import "./App.css";
import { useRef, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { counterReducer } from "./reducers/counterReducer";
import {
  decrementFunction,
  GeneratorDeleteFunction,
  GeneratorFunction,
  incrementFunction,
} from "./actions/actionObjects";
import { squaresReducer } from "./reducers/squaresReducer";
import { ReducerTask } from "./components/ReducerTask";
import { ReducerTask2 } from "./components/ReducerTask2";
import { Usecallback } from "./components/UseCallback";
import { UseMemo } from "./components/UseMemo";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const element = useRef();

  const focusInput = useRef();

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [usersList, setUsersList] = useState([]);

  const users = useRef([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      users.current = res.data.data;
      setUsersList(
        users.current.filter(
          (user) =>
            user.first_name === "George" || user.first_name === "Lindsay"
        )
      );
    });
  }, []);

  let count = 123;
  const handleCount = () => {
    console.log("variable", ++count);
  };
  const [counting, setCounting] = useState(123);
  const countRef = useRef(123);

  // const [count2, setCount2] = useState(0);
  const [counter2, dispatchCounter] = useReducer(counterReducer, 0);

  const [sqauresGenerator, dispatchSquaresGenerator] = useReducer(
    squaresReducer,
    []
  );

  return (
    <div className="App" style={{ height: "3000px" }}>
      <header>This is header</header>
      <UseMemo />
      <Usecallback />
      <ReducerTask2 />
      <ReducerTask />

      <div>
        <button onClick={() => dispatchSquaresGenerator(GeneratorFunction())}>
          Squares Generator
        </button>
        <button
          onClick={() => dispatchSquaresGenerator(GeneratorDeleteFunction())}
        >
          Square Deletor
        </button>
        <div className="generatorContainer">
          {sqauresGenerator.map((element, i) => (
            <div key={i} className={element}></div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={() => dispatchCounter(incrementFunction())}>
          Increment
        </button>
        <p>{counter2}</p>
        <button onClick={() => dispatchCounter(decrementFunction())}>
          Decrement
        </button>
      </div>
      <div>
        <button onClick={handleCount}>Counter variable</button>
        <p>variable {count}</p>

        <button onClick={() => setCounting((prev) => prev + 1)}>
          Counter state
        </button>
        <p>state {counting}</p>

        <button onClick={() => console.log("ref", ++countRef.current)}>
          Counter ref
        </button>
        <p>ref {countRef.current}</p>
      </div>
      {isVisible && (
        <header
          ref={element}
          style={{
            width: "100vw",
            height: "200px",
            backgroundColor: "green",
            position: "fixed",
            top: "0",
          }}
        >
          This is fixed header
        </header>
      )}
      <div>
        <input type="text" ref={focusInput} />
        <input type="text" />
        <input type="text" />
        <button onClick={() => setUsersList(users.current)}>Show all</button>
        <div style={{ display: "flex" }}>
          {usersList?.map((user) => (
            <div key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{user.first_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
