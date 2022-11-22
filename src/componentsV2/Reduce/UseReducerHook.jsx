import React from 'react'

export const UseReducerHook = () => {
  return (
    <div>UseReducerHook</div>
  )
}

let arr = [9,24,5]
let res= arr.reduce((initialValue,currentValue) => {
    console.log('initialValue', initialValue);
    console.log('currentValue', currentValue);
    console.log('');
    return initialValue+currentValue
})
console.log(res);