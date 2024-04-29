import { Useris } from "../interfaces/interface"

const Komponentas3 = ({useriuArray}:{useriuArray:Useris[]}) => {
    return (<div>
        {useriuArray.map((useris) => {
            return <div key={useris.firstName}>{useris.firstName}, {useris.lastName}, {useris.age}, {useris.hobbies?.map((hobby, i) => {return <span key={i}>{hobby},</span>})}</div>
        })}
    </div>)
}

export default Komponentas3