import { Dispatch } from "react"
export interface Counter {
    setCount: Dispatch<React.SetStateAction<number>>
    users?: User[]
}

export interface User {
    name:string;
    age: number;
}

export type Useris = {
    firstName: string;
    lastName: string;
    age: number;
    hobbies?: string[] 
}


