import Komponentas3 from "./Komponentas3";
import { Useris } from "../interfaces/interface";

const Komponentas2 = ({hello}:{hello:string}) => {

    let useriuArray: Useris[]

    useriuArray = [
        {
           firstName: 'Jonas',
           lastName: 'Jonukas',
           age: 13,
           hobbies: ['aliukas', 'krepsinis'] 
        },
        {
            firstName: 'Karolis',
            lastName: 'Karolaitis',
            age: 13,
            hobbies: ['aliukas', 'tinginyste'] 
        }
    ]

    return <div>
        <Komponentas3 useriuArray={useriuArray}/>
    </div>
}

export default Komponentas2