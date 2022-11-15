import { useState } from "react";

export const Counter = () => {
    // let count = 0;

    // hooks are functions
    // useState is a hook used to maintain states in functional comp
    // it returns a variable and a function
    // the variable is same as the value passed to useState
    // the function is used to update that value

    // updating the value using setNumber will also rerender the component
    // setState is asyncronous call hence doesn't execute immidiately


    // const abc = useState(0);
    // console.log(abc);
    const [no, setNumber] = useState(0);
    const [anotherNo, setAnotherNo] = useState('Abhinav');
    const [loggedIn, setLoggedIn] = useState(false);
    
    // objects and arrays
    // console.log('no', no);
    // console.log('setNumber', setNumber);
    // console.log(abc);


    const add = () => {
        // count = count+1
        console.log('before adding', no);
        setNumber(no+5); //---> 101
        console.log('after adding', no);
        // no+1
        // console.log('no', no+1);
        console.log('this is end of function');
    }

    const sub = () => {
        setNumber(no-1);
        // count = count-1
        // console.log('count', count);
    }

    const reset = () => {
        setNumber(0)
    }

    const addNo2 = () => {
        setAnotherNo(anotherNo+1)
    }

    const SubNo2 = () => {
        setAnotherNo(anotherNo-1)
    }

    const login = () => {
        setLoggedIn(true);
    }

    return (
        <>
        <div>
            <div>Count 1: {no}</div>
            <button onClick={add}>+no1</button>
            <button onClick={sub}>-no1</button>
            <button onClick={reset}>reset</button>
        </div>
        <br/>

        <div>
            <div>Count 2: {anotherNo}</div>
            <button onClick={addNo2}>+No2</button>
            <button onClick={SubNo2}>-No2</button>
        </div>

        <div>{loggedIn ? 'User Logged In' : 'logged out'}</div>
            
            <button onClick={login}>login</button>
        </>
    )
}