import ArrayAsStates from "./ArrayAsStates";
import { Counter } from "./Counter";
import UseEffectHook from "./EffectHook/UseEffectHook";
import { FormExample1 } from "./Forms/FormExample1";
import { FormExample2 } from "./Forms/formExample2";
import { SighUpForm } from "./Forms/SignUpForm";
import NameComp from "./NameComp";
import { RefTypeState } from "./ReftypeStates";
import UpdateBasedOnPrevState from "./UpdateBasedOnPrevState";

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
            {/* <Counter/> */}
            {/* <NameComp name='Abhinav'/> */}
            {/* <RefTypeState/> */}
            {/* <ArrayAsStates/> */}
            {/* <UpdateBasedOnPrevState/> */}
            {/* <FormExample1/> */}
            {/* <SighUpForm name='abhinav'/> */}
            {/* <FormExample2/> */}
            <UseEffectHook/>
        </div>
    )
}


// () => {
//     printName('Abhinav')
// }
// printName


// function calculate(a){
//     fetch('https://someApi.com')
//     .then((data)=> {
//         return data
//     } )
//     // return a*10
// }

// calculate(10); 
// calculate(5);

// async calls
// api call, timers
// accessing the Dom