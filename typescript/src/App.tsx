import { useState } from "react";
import "./App.css";
import Komponentas1 from "./components/Komponentas1";
import Komponentas4 from "./components/Komponentas4";

function App() {
  let mynumber: number = 5;
  let myNumbersArray: number[] = [3];
  let myString: Array<string> = ["hey"];
  // fiksuotas skaicius elementu ir nurodyti tiksliai kokie
  let myTuple: [number, string];
  myTuple = [5, "hi"];

  let myObject: Object

  type MyType = string | number | boolean

  type MyUser = {
    firstName: string;
    age: number;
    hobbies?: string[]
  }

  let user: MyUser = {
    firstName: 'John',
    age: 33
  }

  let usersArray: MyUser[]
  
  usersArray = [
    {    firstName: 'John',
    age: 33},
    {    firstName: 'Johnas',
    age: 33}
  ]

  type Coworker=MyUser&{
    id: number;
    department: string
  }

  let useris: Coworker = {
    id: 124,
    department: 'sveiki',
    firstName: 'lukas',
    age: 30
  }

  interface Userer {
    firstname: string;
    age: number;
    hobbies?: string[],
    myFunction?: (name: string) => string
  }

  interface Mycoworkerer extends Userer {
    id: number,
    department: string
  }
  // interface can be extended with type or vice versa


//  function parameter can be interface or type 
  function myFunctione(name:string) {
    console.log(name)
    return name
  }

  myFunctione('john')

  const [count, setCount] = useState<number>(0)

  enum Weekdays{
    Monday=1, Tuesday=2, Wednesday=3, Thursday=4, Friday=5, Saturday=6, Sunday=7
  }

  let today:Weekdays=Weekdays.Monday

  return <div className="App">
    {/* <Komponentas1  count={count} setCount={setCount} users={[]}/> */}
    <Komponentas4 setCount={setCount}/>
    <p className="flex items-center justify-center">{count}</p>
  </div>;
}

export default App;
