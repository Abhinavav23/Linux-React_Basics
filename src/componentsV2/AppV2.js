import { Counter } from "./Counter";
import NameComp from "./NameComp";

export const AppV2 = () => {
    const printName = (name) => {
        console.log('calling inner');
        console.log(name);
        // console.log(`my name is ${name}`);
    }
    return (
        <div>
            <h2>App version 2.0</h2>
            {/* <button onClick={() => {
                console.log('calling outer');
                printName('abhinav')
            }}>click1</button>
            <button onClick={printName}>click2</button> */}
            <Counter/>
            <NameComp name='Abhinav'/>
        </div>
    )
}


// () => {
//     printName('Abhinav')
// }
// printName