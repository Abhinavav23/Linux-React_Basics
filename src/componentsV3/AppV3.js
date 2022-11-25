import React, { createContext } from 'react'
import { CompB } from './LeftTree/CompB'
import { LeftParent } from './LeftTree/LeftParent'
import { RightParent } from './RightTree/RightParent'

// step 1. create a context

// const nameContext = React.createContext()
export const NameContext = createContext();


export const AppV3 = () => {
    let name = 'Abhinav';
    let role = 'Instructor'
  return (
   <>
    <h1>AppV3</h1>
    <LeftParent name={name}/>

    {/* step 2. provide the context  with value*/}
    <NameContext.Provider value={role}>
        <RightParent/>
    </NameContext.Provider>
    

    {/* <CompB name ={name}/> */}
   </>
  )
}


// export a = 10
// test = {
//     a: 10
// }
// export default test