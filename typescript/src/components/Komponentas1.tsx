import React, {useRef, useState} from "react"
import { Counter } from "../interfaces/interface"
import Komponentas2 from "./Komponentas2"

const Komponentas1: React.FC<Counter> = ({count, setCount}) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [square, setSquare] = useState<number[] | string[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const handleClick = (id: number) => {
        console.log(id)
    }

    let hello: string = "laba diena";

    return <div>
        <Komponentas2 hello={hello}/>
    </div>
}

export default Komponentas1