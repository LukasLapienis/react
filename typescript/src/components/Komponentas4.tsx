import { Counter } from "../interfaces/interface"

const Komponentas4 = ({setCount}:Counter) => {
    const handleAdd = () => {
        setCount((prev) => prev+1)
    }

    const handleSubstract = () => {
        setCount((prev) => prev-3)
    }


    return (
        <div className="flex flex-col gap-3 p-3 items-center">
            <button onClick={() => handleAdd()}>add 1</button>
            <button onClick={() => handleSubstract()}>substract 3</button>
        </div>
    )
}

export default Komponentas4